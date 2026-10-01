"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="rounded-control border border-border px-4 py-2 text-small text-text transition-colors duration-[120ms] hover:border-accent hover:text-accent"
      >
        Menu
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-16 border-b border-border bg-bg"
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col px-[clamp(1.25rem,4vw,2rem)] py-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-small text-text transition-colors duration-[120ms] hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Basel_Yosry_CV.pdf"
              download
              onClick={() => setOpen(false)}
              className="block py-2 text-small text-text transition-colors duration-[120ms] hover:text-accent"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
