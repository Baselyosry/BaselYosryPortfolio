const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-[clamp(1.25rem,4vw,2rem)]">
        <span className="text-body font-semibold tracking-tight text-text">
          Basel Yosry
        </span>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-small text-text transition-colors duration-[120ms] hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="/Basel_Yosry_CV.pdf"
          download
          className="hidden rounded-control border border-border px-4 py-2 text-small text-text transition-colors duration-[120ms] hover:border-accent hover:text-accent md:inline-flex"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
