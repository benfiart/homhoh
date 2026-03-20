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
  name: "HomHoh Coffee",
  url: "https://homhoh.com",
  logo: "https://homhoh.com/logo.png",
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
    email: "hello@homhoh.com",
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
