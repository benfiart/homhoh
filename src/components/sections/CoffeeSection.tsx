"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { coffeeCards } from "@/lib/constants";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function CoffeeSection() {
  return (
    <section id="coffee" className="py-24 sm:py-32 bg-cream-100">
      <Container>
        <SectionHeading
          label="The Coffee"
          title="From Mountain to Cup"
          subtitle="Hand-picked at 2,950–3,940 ft elevation by families who have tended these mountains for generations."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
        >
          {coffeeCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariant}
                className="rounded-2xl bg-cream-50 border border-cream-200 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brown-600/20 hover:shadow-lg hover:shadow-brown-600/5"
              >
                <Icon className="w-6 h-6 text-brown-600 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-brown-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Photo grid - top row: wide landscape + portrait coffee shot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <AnimatedSection className="md:col-span-8">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/images/8186_0.webp"
                alt="Jack and Manap walking among the coffee trees"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="md:col-span-4">
            <div className="relative aspect-[3/4] md:aspect-auto md:h-full min-h-[280px] rounded-2xl overflow-hidden">
              <Image
                src="/images/9166_0.webp"
                alt="Coffee beans and a freshly brewed cup"
                fill
                className="object-cover object-center"
              />
            </div>
          </AnimatedSection>
        </div>
        {/* Bottom row: three equal landscape crops */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <AnimatedSection>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/9176_0.webp"
                alt="Farmers harvesting coffee on the mountainside"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/9179_0.webp"
                alt="Jack examining coffee branches on the farm"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/8187_0.webp"
                alt="Manap showing Jack the coffee plants up close"
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
