import { Download, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { siGithub } from "simple-icons";

import { Section } from "@/components/sections/Section";
import { profile } from "@/data/profile";

const linkedinPath =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

const iconClass = "h-6 w-6";
const linkClass =
  "inline-flex text-muted transition-colors duration-[120ms] hover:text-accent";

type ContactItem = {
  label: string;
  href: string;
  download?: boolean;
  icon: ReactNode;
};

export function Contact() {
  const contacts: ContactItem[] = [
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      icon: <Mail className={iconClass} aria-hidden />,
    },
    {
      label: "GitHub",
      href: profile.github,
      icon: (
        <svg
          viewBox="0 0 24 24"
          className={iconClass}
          fill="currentColor"
          aria-hidden
        >
          <path d={siGithub.path} />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: (
        <svg
          viewBox="0 0 24 24"
          className={iconClass}
          fill="currentColor"
          aria-hidden
        >
          <path d={linkedinPath} />
        </svg>
      ),
    },
    {
      label: "Download CV",
      href: profile.cvPath,
      download: true,
      icon: <Download className={iconClass} aria-hidden />,
    },
  ];

  return (
    <Section id="contact" title="Contact">
      <p className="max-w-[62ch] text-body text-text">
        Email is the fastest way to reach me.
      </p>
      <ul className="mt-6 flex flex-wrap items-center gap-5">
        {contacts.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              {...(item.download ? { download: true } : {})}
              aria-label={item.label}
              title={item.label}
              className={linkClass}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
