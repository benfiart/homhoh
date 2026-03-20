"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { coffeeCards, terroirData, cuppingScores } from "@/lib/constants";

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
    <section id="coffee" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="The Coffee"
          title="From Mountain to Cup"
          subtitle="Shade-grown specialty Arabica from the community forests of Mae Ho."
        />

        {/* Coffee cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {coffeeCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariant}
                className="rounded-2xl bg-cream-100 border border-cream-200 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brown-600/20 hover:shadow-lg hover:shadow-brown-600/5"
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

        {/* Terroir data block */}
        <AnimatedSection className="mb-20">
          <div className="rounded-2xl bg-cream-100 border border-cream-200 p-8 sm:p-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brown-800 mb-2 text-center">
              The Terroir
            </h3>
            <p className="text-text-muted text-sm text-center mb-8">
              The land behind the flavor
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {terroirData.map((item) => (
                <div key={item.label}>
                  <p className="text-xs tracking-[0.15em] uppercase text-brown-600 font-medium mb-1">
                    {item.label}
                  </p>
                  <p className="text-brown-800 text-sm font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Cupping scores — chart left, scores right */}
        <AnimatedSection>
          <div className="rounded-2xl bg-cream-100 border border-cream-200 p-8 sm:p-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brown-800 mb-2 text-center">
              Cupping Scores
            </h3>
            <p className="text-text-muted text-sm text-center mb-10">
              Three processing methods, one exceptional origin
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Radar chart */}
              <div className="flex justify-center">
                <Image
                  src="/images/cupping-chart.webp"
                  alt="The Flavor Blueprint - radar chart showing aroma, flavor, acid, body, and balance across natural, honey, and washed processing methods"
                  width={420}
                  height={470}
                  className="w-full max-w-[420px]"
                />
              </div>
              {/* Score cards */}
              <div className="flex flex-col gap-5">
                {cuppingScores.map((item) => (
                  <div
                    key={item.method}
                    className="flex items-center gap-6 rounded-xl bg-cream-50 border border-cream-200 px-6 py-5"
                  >
                    <div className="flex-shrink-0 text-center w-20">
                      <p className="font-serif text-4xl font-bold text-brown-800 leading-none">
                        {item.score}
                      </p>
                    </div>
                    <div className="border-l border-cream-200 pl-6">
                      <p className="text-xs tracking-[0.15em] uppercase text-brown-600 font-medium mb-1">
                        {item.method}
                      </p>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-16">
          <AnimatedSection className="md:col-span-8">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/images/8186_0.webp"
                alt="Jack and Manop walking among the coffee trees"
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
                alt="Manop showing Jack the coffee plants up close"
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
