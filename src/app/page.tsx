import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import CoffeeSection from "@/components/sections/CoffeeSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import WhereToBuySection from "@/components/sections/WhereToBuySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
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
