type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description
}: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-3xl fade-up">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
