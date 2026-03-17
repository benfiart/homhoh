"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { MapPin, Clock, Mail } from "lucide-react";

export default function WhereToBuySection() {
  return (
    <section id="where-to-buy" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Where to Find Us"
          title="At the Farmer&rsquo;s Market"
          subtitle="Come say hello, hear the story, and take a bag of freshly roasted mountain coffee home."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-text-secondary text-lg leading-relaxed">
                We roast HomHoh Coffee locally in Milwaukee and sell it fresh at
                the farmer&apos;s market. No online store, no big retail &mdash; just us,
                the coffee, and the story behind it.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Most of our customers found us through a friend. That&apos;s how we
                like it &mdash; word of mouth, one cup at a time.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin className="w-5 h-5 text-brown-600 flex-shrink-0" />
                  {/* TODO: Update with actual market name and location */}
                  <span>Milwaukee Farmer&apos;s Market, Milwaukee, WI</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Clock className="w-5 h-5 text-brown-600 flex-shrink-0" />
                  {/* TODO: Update with actual market days/hours */}
                  <span>Saturdays, 8am &ndash; 1pm</span>
                </div>
              </div>
              <div className="pt-2">
                <a href="#contact" className="btn-primary">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[3/4] max-w-xs mx-auto rounded-2xl overflow-hidden shadow-xl shadow-brown-900/10">
              <Image
                src="/images/9187_0.webp"
                alt="A bag of HomHoh Coffee"
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
