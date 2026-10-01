export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-[clamp(1.25rem,4vw,2rem)] py-8">
        <p className="text-small text-muted">Basel Yosry, {year}</p>
      </div>
    </footer>
  );
}
