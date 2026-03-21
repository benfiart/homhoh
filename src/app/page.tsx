import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import ManopSection from "@/components/sections/ManopSection";
import CoffeeSection from "@/components/sections/CoffeeSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import WhereToBuySection from "@/components/sections/WhereToBuySection";
import ContactSection from "@/components/sections/ContactSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Siam Coffees",
  url: "https://siamcoffees.com",
  logo: "https://siamcoffees.com/logo.png",
  description:
    "Direct-trade specialty Arabica coffee from 25 Karen Tribe farming families in Mae Hong Son, Thailand. Roasted in Milwaukee, Wisconsin. 100% of profits returned to farmers.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Milwaukee",
    addressRegion: "WI",
    addressCountry: "US",
  },
  sameAs: ["https://www.facebook.com/homhoh.coffee.3/"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@siamcoffees.com",
    contactType: "customer service",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#story"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brown-600 focus:text-cream-50 focus:rounded-lg focus:text-sm"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <ManopSection />
        <CoffeeSection />
        <ImpactSection />
        <ReviewsSection />
        <WhereToBuySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
