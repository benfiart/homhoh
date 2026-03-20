"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with Ken Burns effect */}
      <div
        className="absolute inset-0"
        style={{ animation: "kenBurns 20s ease-in-out infinite alternate" }}
      >
        <Image
          src="/images/8177_0.webp"
          alt="Jack with Manap, his mother and grandmother"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-brown-900/50" />

      <Container className="relative z-10">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="text-center"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs tracking-[0.3em] uppercase text-cream-200/80 mb-6 block"
            >
              {siteConfig.heroLabel}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-cream-50/60"
            >
              Mountain Coffee,
            </motion.h1>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-cream-50/60 mt-2"
            >
              Mountain People
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-cream-50/60 mt-2"
            >
              Karen Tribe
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-cream-200/80 text-base sm:text-lg text-balance leading-relaxed"
            >
              {siteConfig.heroSubheading}
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4 mt-10">
              <a href="#story" className="btn-primary">
                Our Story
              </a>
              <a
                href="#where-to-buy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-cream-50/30 text-cream-50 rounded-lg transition-all duration-200 hover:border-cream-50/60 hover:bg-cream-50/10 active:scale-[0.98] text-sm"
              >
                Where to Buy
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-cream-200/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-cream-200/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
