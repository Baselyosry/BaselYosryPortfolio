type TechLogoProps = {
  name: string;
  path?: string;
};

export function TechLogo({ name, path }: TechLogoProps) {
  if (path) {
    return (
      <span className="inline-flex text-muted transition-colors duration-[120ms] hover:text-text">
        <svg role="img" viewBox="0 0 24 24" className="h-7 w-7 fill-current">
          <title>{name}</title>
          <path d={path} />
        </svg>
      </span>
    );
  }

  return (
    <span className="font-mono text-mono leading-7 text-muted transition-colors duration-[120ms] hover:text-text">
      {name}
    </span>
  );
}
