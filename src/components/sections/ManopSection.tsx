"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { manopContent } from "@/lib/constants";

export default function ManopSection() {
  return (
    <section id="farmer" className="py-24 sm:py-32 bg-cream-100">
      <Container>
        <SectionHeading
          label={manopContent.label}
          title={manopContent.title}
        />

        {/* Part 1: From Opium to Coffee */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <AnimatedSection>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brown-800 mb-6">
              {manopContent.part1.subtitle}
            </h3>
            <div className="space-y-6">
              {manopContent.part1.paragraphs.map((p, i) => (
                <p key={i} className="text-text-secondary text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden">
              <Image
                src="/images/manop-portrait.webp"
                alt="Manop sitting in the mountain forest of Mae Hong Son"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Part 2: Building Something Together */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden">
              <Image
                src="/images/manop-sorting.webp"
                alt="Manop carefully sorting coffee cherries"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="order-1 lg:order-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brown-800 mb-6">
              {manopContent.part2.subtitle}
            </h3>
            <div className="space-y-6">
              {manopContent.part2.paragraphs.map((p, i) => (
                <p key={i} className="text-text-secondary text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Bridge: Where their stories converge */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/9174_0.webp"
                alt="Jack with Manop and his family in front of the coffee trees"
                fill
                className="object-cover object-[center_30%]"
              />
            </div>
            <p className="font-serif text-xl sm:text-2xl text-brown-800 leading-relaxed italic">
              &ldquo;{manopContent.bridge}&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
