"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";

import {
  initialEntries,
  suggestions,
  terminalPrompt,
  terminalTitle,
  type TerminalEntry,
} from "@/data/terminal";
import { profile } from "@/data/profile";
import { commandNames, runCommand } from "@/lib/terminal/commands";

const MAX_INPUT = 120;
const MAX_HISTORY = 50;
const MAX_ENTRIES = 200;

type Entry = TerminalEntry & { id: number };

const seed: Entry[] = initialEntries.map((entry, index) => ({
  ...entry,
  id: index,
}));

let idCounter = seed.length;

function Prompt() {
  return (
    <span aria-hidden className="shrink-0">
      <span className="text-muted">{terminalPrompt}</span>
      <span className="text-accent">$</span>
    </span>
  );
}

export function Terminal() {
  const [entries, setEntries] = useState<Entry[]>(seed);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const log = logRef.current;
    if (log) {
      log.scrollTop = log.scrollHeight;
    }
  }, [entries]);

  const append = (added: Omit<Entry, "id">[]) => {
    setEntries((current) => {
      const withIds = added.map((entry) => ({ ...entry, id: idCounter++ }));
      const next = [...current, ...withIds];
      return next.length > MAX_ENTRIES
        ? next.slice(next.length - MAX_ENTRIES)
        : next;
    });
  };

  const run = (raw: string) => {
    const trimmed = raw.trim();
    if (trimmed) {
      setHistory((current) => [...current, trimmed].slice(-MAX_HISTORY));
    }
    setHistoryIndex(-1);
    setValue("");

    const result = runCommand(raw);

    if (result.clear) {
      setEntries([]);
      return;
    }

    append([
      { kind: "input", text: raw },
      ...result.lines.map((line) => ({ kind: "output" as const, text: line })),
    ]);

    if (result.scrollTo) {
      document.getElementById(result.scrollTo)?.scrollIntoView();
    }

    if (result.openCaseStudy) {
      const hash = `#${result.openCaseStudy}`;
      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
      }
      window.dispatchEvent(new PopStateEvent("popstate"));
    }

    if (result.downloadCv) {
      const link = document.createElement("a");
      link.href = profile.cvPath;
      link.download = "";
      document.body.append(link);
      link.click();
      link.remove();
    }
  };

  const complete = (current: string) => {
    if (!current || current.includes(" ")) {
      return null;
    }
    const matches = commandNames.filter((name) => name.startsWith(current));
    if (matches.length === 1) {
      return matches[0];
    }
    if (matches.length > 1) {
      const prefix = matches.reduce((accumulator, name) =>
        name.slice(0, commonLength(accumulator, name)),
      );
      return prefix.length > current.length ? prefix : null;
    }
    return null;
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      run(value);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (history.length === 0) {
        return;
      }
      const nextIndex =
        historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(history[nextIndex] ?? "");
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex === -1) {
        return;
      }
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setValue("");
      } else {
        setHistoryIndex(nextIndex);
        setValue(history[nextIndex] ?? "");
      }
      return;
    }

    if (event.key === "Tab") {
      const completed = complete(value.trim());
      if (completed) {
        event.preventDefault();
        setValue(`${completed} `);
      }
    }
  };

  return (
    <div className="rounded-panel border border-border bg-surface">
      <div className="border-b border-border px-4 py-2 font-mono text-mono text-muted">
        {terminalTitle}
      </div>

      <div
        ref={logRef}
        role="log"
        aria-live="polite"
        className="h-64 overflow-y-auto px-4 py-3 font-mono text-mono"
      >
        {entries.map((entry) =>
          entry.kind === "input" ? (
            <div key={entry.id} className="flex gap-2">
              <Prompt />
              <span className="break-all text-text">{entry.text}</span>
            </div>
          ) : entry.typed ? (
            <div key={entry.id} className="text-text">
              <span
                className="terminal-typed"
                style={
                  {
                    "--terminal-type-steps": entry.text.length,
                    "--terminal-type-width": `${entry.text.length}ch`,
                  } as CSSProperties
                }
              >
                {entry.text}
              </span>
            </div>
          ) : (
            <div
              key={entry.id}
              className={`whitespace-pre-wrap ${
                entry.muted ? "text-muted" : "text-text"
              }`}
            >
              {entry.text}
            </div>
          ),
        )}
      </div>

      <form
        className="border-t border-border px-4 py-3 font-mono text-mono"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="relative flex items-center gap-2">
          <Prompt />
          <div className="relative min-w-0 flex-1">
            <span aria-hidden className="break-all text-text">
              {value}
              <span className="terminal-cursor" />
            </span>
            <input
              ref={inputRef}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={onKeyDown}
              maxLength={MAX_INPUT}
              aria-label="Terminal input"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              className="absolute inset-0 h-full w-full cursor-text bg-transparent text-base text-transparent caret-transparent outline-none"
            />
          </div>
        </div>

        <div className="mt-3 hidden flex-wrap gap-2 [@media(pointer:coarse)]:flex">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => run(suggestion)}
              className="rounded-control border border-border px-2 py-1 text-mono text-muted transition-colors duration-[120ms] hover:border-accent hover:text-accent"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}

function commonLength(a: string, b: string) {
  let index = 0;
  while (index < a.length && index < b.length && a[index] === b[index]) {
    index += 1;
  }
  return index;
}
