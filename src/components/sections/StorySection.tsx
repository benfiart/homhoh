"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { storyContent } from "@/lib/constants";

export default function StorySection() {
  return (
    <section id="story" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          label={storyContent.label}
          title={storyContent.title}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              {storyContent.paragraphs.map((p, i) => (
                <p key={i} className="text-text-secondary text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/8174_0.webp"
                alt="Jack and Manop shaking hands at the HomHoh Coffee sign"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
