"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { reviews } from "@/lib/constants";
import { Quote } from "lucide-react";

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

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-cream-100">
      <Container>
        <SectionHeading
          label="Reviews"
          title="What Roasters Are Saying"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={cardVariant}
              className="rounded-2xl bg-cream-50 border border-cream-200 p-7 flex flex-col"
            >
              <Quote className="w-5 h-5 text-brown-600/30 mb-4" />
              <blockquote className="font-serif text-lg italic text-brown-800 leading-relaxed mb-6 flex-1">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-brown-800 text-sm">{review.name}</p>
                <p className="text-text-muted text-xs">
                  {review.title}, {review.business}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
