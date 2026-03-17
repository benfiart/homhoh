"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { MapPin, Mail } from "lucide-react";

export default function WhereToBuySection() {
  return (
    <section id="where-to-buy" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Where to Buy"
          title="Carry HomHoh Coffee"
          subtitle="We supply green coffee to roasters and coffee shops in the Milwaukee area."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-text-secondary text-lg leading-relaxed">
                HomHoh Coffee is available as green (unroasted) beans for local roasters,
                and as freshly roasted coffee through our partner shops in Milwaukee.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                We&apos;re always looking for roasters and shops who share our values
                and want to offer something truly unique to their customers.
              </p>
              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin className="w-5 h-5 text-brown-600" />
                <span>Milwaukee, Wisconsin</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl bg-cream-100 border border-cream-200 p-8 text-center">
              <h3 className="font-serif text-2xl font-semibold text-brown-800 mb-3">
                Interested in carrying HomHoh?
              </h3>
              <p className="text-text-secondary mb-6">
                Reach out and we&apos;ll send you a sample and tell you more about our story.
              </p>
              <a href="#contact" className="btn-primary">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
