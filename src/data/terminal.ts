import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export type TerminalEntry = {
  kind: "input" | "output";
  text: string;
  muted?: boolean;
  typed?: boolean;
};

export const terminalTitle = "basel@portfolio: zsh";
export const terminalPrompt = "basel@portfolio:~";

export const welcomeLine = "Welcome. Type help to see what you can ask.";
export const whoamiLine =
  "Basel Yosry. Backend and full-stack engineer in Cairo.";
export const helpLine =
  "whoami, projects, open <name>, experience, skills, contact, cv, clear";

export function unknownCommand(input: string) {
  return `command not found: ${input}. Type help for the list.`;
}

export function projectsOutput() {
  return projects.map((project) => `${project.year}  ${project.title}`);
}

export function experienceOutput() {
  return experience.map((entry) =>
    entry.period
      ? `${entry.organization}: ${entry.role}, ${entry.period}`
      : `${entry.organization}: ${entry.role}`,
  );
}

export function skillsOutput() {
  return skillGroups.map((group) => `${group.group}: ${group.items.join(", ")}`);
}

export function contactOutput() {
  return [profile.email, profile.github, profile.linkedin];
}

export const initialEntries: TerminalEntry[] = [
  { kind: "output", text: welcomeLine, muted: true },
  { kind: "input", text: "whoami" },
  { kind: "output", text: whoamiLine, typed: true },
];

export const suggestions = [
  "whoami",
  "projects",
  "experience",
  "skills",
  "contact",
  "help",
];
