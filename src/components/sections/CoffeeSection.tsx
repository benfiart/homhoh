"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
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
          subtitle="Hand-picked at elevation by families who have tended these mountains for generations."
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

        {/* Full-width landscape */}
        <ImagePlaceholder
          label="Mountain panorama of Mae Hong Son coffee region"
          aspectRatio="aspect-[21/9]"
        />
      </Container>
    </section>
  );
}
