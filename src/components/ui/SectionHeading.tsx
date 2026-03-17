import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={`mb-16 ${centered ? "text-center" : ""}`}>
      <span className="text-xs tracking-[0.2em] uppercase text-brown-600 mb-4 block font-medium">
        {label}
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brown-800 mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
