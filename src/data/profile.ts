import { basePath } from "@/lib/site";

export type Profile = {
  name: string;
  fullName: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cvPath: string;
  hero: {
    heading: string;
    intro: string;
    technologies: string[];
  };
  about: {
    paragraphs: string[];
    education: string;
  };
};

export const profile: Profile = {
  name: "Basel Yosry",
  fullName: "Basel Yosry Abdellatif",
  role: "Backend engineer",
  location: "Cairo, Egypt",
  email: "baselyosry96@gmail.com",
  github: "https://github.com/Baselyosry",
  linkedin: "https://linkedin.com/in/baselyosry",
  cvPath: `${basePath}/Basel_Yosry_CV.pdf`,
  hero: {
    heading: "Basel Yosry builds backend systems.",
    intro:
      "Backend and full-stack engineer in Cairo. I co-founded Tristack, where I build and deploy web platforms for clients in Egypt and Saudi Arabia.",
    technologies: ["C#", "TypeScript", "Node.js", "PostgreSQL"],
  },
  about: {
    paragraphs: [
      "I graduated in Computer Science from MUST in 2026. Most of my work is backend: designing the data model, the API, and the deployment, then keeping it running.",
      "At Tristack, a software house I co-founded with two partners, I handle backend development, DevOps, and project management. That means I am usually the person who scopes the work, builds it, and ships it.",
    ],
    education: "BSc in Computer Science, MUST, 2026",
  },
};
