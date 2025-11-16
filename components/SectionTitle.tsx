interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center"
}: SectionTitleProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "text-center mx-auto" : "text-left"}`}>
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-neutral-600">{subtitle}</p>}
    </div>
  );
}
