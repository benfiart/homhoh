"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { storyContent } from "@/lib/constants";

export default function StorySection() {
  return (
    <section id="story" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          label={storyContent.part1.label}
          title={storyContent.part1.title}
        />

        {/* Part 1: The Meeting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <AnimatedSection>
            <div className="space-y-6">
              {storyContent.part1.paragraphs.map((p, i) => (
                <p key={i} className="text-text-secondary text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ImagePlaceholder
              label={storyContent.part1.imageLabel}
              aspectRatio="aspect-[4/3]"
            />
          </AnimatedSection>
        </div>

        {/* Part 2: The Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <ImagePlaceholder
              label={storyContent.part2.imageLabel}
              aspectRatio="aspect-[4/3]"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="order-1 lg:order-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brown-800 mb-6">
              {storyContent.part2.title}
            </h3>
            <div className="space-y-6">
              {storyContent.part2.paragraphs.map((p, i) => (
                <p key={i} className="text-text-secondary text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
