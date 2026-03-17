"use client";

import { useState, FormEvent } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { contactInfo } from "@/lib/constants";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-cream-100">
      <Container>
        <SectionHeading
          label="Contact"
          title="Let\u2019s Connect"
          subtitle="Whether you're a roaster, a coffee shop, or just curious about our story."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-semibold text-brown-800 mb-4">
                  Reach Out
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We&apos;d love to hear from you. Whether you want to stock HomHoh Coffee,
                  learn more about our farmers, or just say hello.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brown-600" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-text-secondary hover:text-brown-600 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brown-600" />
                  <span className="text-text-secondary">{contactInfo.location}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2}>
            {submitted ? (
              <div className="rounded-2xl bg-cream-50 border border-cream-200 p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-green-700 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-brown-800 mb-2">
                  Message Sent
                </h3>
                <p className="text-text-secondary">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brown-800 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cream-50 border border-cream-200 text-brown-900 placeholder:text-text-muted focus:outline-none focus:border-brown-600/50 focus:ring-1 focus:ring-brown-600/20 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brown-800 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cream-50 border border-cream-200 text-brown-900 placeholder:text-text-muted focus:outline-none focus:border-brown-600/50 focus:ring-1 focus:ring-brown-600/20 transition-colors text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brown-800 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cream-50 border border-cream-200 text-brown-900 placeholder:text-text-muted focus:outline-none focus:border-brown-600/50 focus:ring-1 focus:ring-brown-600/20 transition-colors text-sm resize-none"
                    placeholder="Tell us about your interest in HomHoh Coffee..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
