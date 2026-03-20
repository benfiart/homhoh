"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { contactInfo } from "@/lib/constants";
import { Mail, Facebook } from "lucide-react";

export default function WhereToBuySection() {
  return (
    <section id="where-to-buy" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Where to Find Us"
          title="Coming to Milwaukee"
          subtitle="Freshly roasted mountain coffee, straight from the Karen Tribe families of Mae Hong Son to you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-text-secondary text-lg leading-relaxed">
                We roast HomHoh Coffee locally in Milwaukee and share it with the
                community. No online store, no big retail &mdash; just us,
                the coffee, and the story behind it.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Most of our customers find us through a friend. That&apos;s how we
                like it &mdash; word of mouth, one cup at a time. Get in touch
                and we&apos;ll let you know where to find us.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="#contact" className="btn-primary">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href={contactInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Facebook className="w-4 h-4" />
                  Follow the Farm
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
