const sections = [
  { id: "about", title: "About" },
  { id: "projects", title: "Selected work" },
  { id: "experience", title: "Experience" },
  { id: "stack", title: "Technical stack" },
  { id: "contact", title: "Contact" },
];

export default function Home() {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className="mx-auto w-full max-w-6xl scroll-mt-16 px-[clamp(1.25rem,4vw,2rem)] py-18 md:py-28"
        >
          <h2 id={`${section.id}-title`} className="text-section text-text">
            {section.title}
          </h2>
        </section>
      ))}
    </>
  );
}
