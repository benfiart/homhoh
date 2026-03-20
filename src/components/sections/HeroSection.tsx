"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

// Cinematic clip-path reveal — each line wipes in from bottom
const clipReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  show: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Reduced parallax on mobile, multi-speed on desktop
  const photoY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -20 : -60]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -40 : -160]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -50 : -200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background image — object-position adjusted per breakpoint */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          y: photoY,
          animation: "kenBurns 20s ease-in-out infinite alternate",
        }}
      >
        <Image
          src="/images/8177_0.webp"
          alt="Jack with Manap, his mother and grandmother sharing coffee on the mountain farm"
          fill
          className="object-cover object-[30%_25%] sm:object-[center_25%]"
          priority
        />
      </motion.div>

      {/* Eased warm gradient scrim — transparent at top (faces), dark at bottom (text) */}
      <div className="absolute inset-0 hero-scrim" />

      {/* Content — anchored to bottom-left, editorial magazine layout */}
      <Container className="relative z-10 min-h-screen flex flex-col justify-end pb-16 sm:pb-24 lg:pb-28">
        <motion.div
          style={{ y: headingY, opacity: textOpacity }}
          className="will-change-transform"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Single H1 with three visual lines for SEO */}
            <motion.h1
              className="font-serif text-[2.5rem] sm:text-7xl lg:text-9xl font-bold tracking-tight leading-[0.9] text-cream-50 hero-text-shadow"
            >
              <motion.span variants={clipReveal} className="block">
                Mountain Coffee
              </motion.span>
              <motion.span variants={clipReveal} className="block">
                Mountain People
              </motion.span>
              <motion.span variants={clipReveal} className="block">
                Karen Tribe
              </motion.span>
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Subheading + CTAs */}
        <motion.div
          style={{ y: ctaY, opacity: textOpacity }}
          className="will-change-transform"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={fadeUp}
              className="mt-6 sm:mt-8 flex flex-row items-center gap-6 flex-wrap"
            >
              <p className="max-w-lg text-cream-50/90 text-sm sm:text-lg leading-relaxed hero-text-shadow">
                {siteConfig.heroSubheading}
              </p>
              <div className="flex gap-3">
                <a href="#story" className="btn-primary text-xs sm:text-sm">
                  Our Story
                </a>
                <a
                  href="#where-to-buy"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border border-cream-50/25 text-cream-50 rounded-lg transition-all duration-200 hover:border-cream-50/50 hover:bg-cream-50/10 active:scale-[0.98] text-xs sm:text-sm backdrop-blur-sm"
                >
                  Where to Buy
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Origin label — bottom right, hidden on mobile to avoid overlap */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-4 left-4 sm:bottom-8 sm:right-8 sm:left-auto text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-cream-50/30 hero-text-shadow z-10"
      >
        {siteConfig.heroLabel}
      </motion.span>
    </section>
  );
}
