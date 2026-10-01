export type ExperienceEntry = {
  organization: string;
  role: string;
  period?: string;
  location?: string;
  summary: string[];
  current: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    organization: "Tristack",
    role: "Co-founder",
    summary: [
      "Software house delivering web and technology solutions to clients in Egypt and Saudi Arabia, with two partners.",
      "Handles backend development, DevOps, and project management.",
    ],
    current: true,
  },
  {
    organization: "MNT-Halan (Talabeyah)",
    role: "Full-Stack Developer Intern",
    period: "Aug 2026 to Sep 2026",
    location: "Cairo, Egypt",
    summary: [
      "Full-stack feature work across Angular, TypeScript, JavaScript, and .NET, collaborating with the team using Git.",
      "Built frontend work with CSS Flexbox and Grid, responsive design, modern JavaScript, TypeScript, and Angular.",
      "Worked in C# with SOLID and design patterns, Entity Framework Core, LINQ, and SQL Server.",
    ],
    current: false,
  },
  {
    organization: "CodeCampsis",
    role: "Backend Engineer Intern",
    period: "Sep 2025 to Dec 2025",
    location: "German startup, remote",
    summary: [
      "Built REST APIs for an internal e-learning platform using ASP.NET Core and SQL Server.",
      "Implemented ASP.NET Core Identity with role-based access control for learners, instructors, and admins.",
      "Worked directly with stakeholders to translate business requirements into technical solutions.",
    ],
    current: false,
  },
  {
    organization: "WE (Telecom Egypt)",
    role: "Backend Web Development Trainee",
    period: "Jul 2025 to Sep 2025",
    location: "Cairo, Egypt",
    summary: [
      "Completed a 170-hour ASP.NET backend program covering C#, OOP, SOLID, LINQ, and Entity Framework Core.",
      "Built a full MVC and Web API project applying database design, business logic, and RESTful endpoints using Agile practices.",
    ],
    current: false,
  },
];
