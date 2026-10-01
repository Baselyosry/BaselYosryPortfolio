import { caseStudies } from "@/data/caseStudies";
import {
  contactOutput,
  experienceOutput,
  helpLine,
  projectsOutput,
  skillsOutput,
  unknownCommand,
  whoamiLine,
} from "@/data/terminal";

export type CommandResult = {
  lines: string[];
  clear?: boolean;
  scrollTo?: string;
  openCaseStudy?: string;
  downloadCv?: boolean;
};

export const commandNames = [
  "help",
  "whoami",
  "projects",
  "open",
  "experience",
  "skills",
  "contact",
  "cv",
  "clear",
];

const handlers = new Map<string, (arg: string) => CommandResult>([
  ["help", () => ({ lines: [helpLine] })],
  ["whoami", () => ({ lines: [whoamiLine] })],
  ["projects", () => ({ lines: projectsOutput(), scrollTo: "projects" })],
  ["experience", () => ({ lines: experienceOutput(), scrollTo: "experience" })],
  ["skills", () => ({ lines: skillsOutput(), scrollTo: "stack" })],
  ["contact", () => ({ lines: contactOutput(), scrollTo: "contact" })],
  ["cv", () => ({ lines: ["Starting the CV download."], downloadCv: true })],
  ["clear", () => ({ lines: [], clear: true })],
  [
    "open",
    (arg) => {
      if (!arg) {
        return { lines: ["usage: open <name>"] };
      }
      const study = caseStudies.find((item) => item.slug === arg);
      if (!study) {
        return { lines: [`No case study named ${arg}.`] };
      }
      return { lines: [`Opening ${study.title}.`], openCaseStudy: study.slug };
    },
  ],
]);

export function runCommand(input: string): CommandResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return { lines: [] };
  }

  const [name, ...rest] = trimmed.split(/\s+/);
  const handler = handlers.get(name);
  if (!handler) {
    return { lines: [unknownCommand(trimmed)] };
  }

  return handler(rest.join(" "));
}
