"use client";

import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { impactData } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

function Counter() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, 100, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [inView, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref} className="font-serif text-7xl sm:text-8xl lg:text-9xl font-bold text-brown-600">
      {display}%
    </span>
  );
}

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Impact"
          title="Where Your Dollar Goes"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Big stat */}
          <AnimatedSection className="text-center lg:text-left">
            <Counter />
            <p className="mt-4 text-text-secondary text-xl leading-relaxed max-w-md">
              {impactData.subheading}
            </p>
          </AnimatedSection>

          {/* Right: Breakdown */}
          <div className="space-y-6">
            {impactData.breakdown.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.15}>
                <div className="flex gap-4 items-start p-6 rounded-2xl bg-cream-100 border border-cream-200">
                  <ArrowRight className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-1">{item.label}</h4>
                    <p className="text-text-secondary text-sm">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Full-width photo below */}
        <AnimatedSection className="mt-16">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src="/images/9172_0.webp"
              alt="Jack and Manap standing together at the HomHoh Coffee farm"
              fill
              className="object-cover"
            />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
