import Hero from "@/components/hero";
import GamesPreview from "@/components/games-preview";
import EventTypes from "@/components/event-types";
import WhyChooseUs from "@/components/why-choose-us";
import PromiseSection from "@/components/promise-section";
import ReviewsSection from "@/components/reviews-section";
import HowItWorksPreview from "@/components/how-it-works-preview";
import CTASection from "@/components/cta-section";
import InsuranceSection from "@/components/insurance-section";
import InsuranceSectionTailwind from "@/components/insurance-section-tailwind";

export default function Home() {
  return (
    <>
      <Hero />
      <GamesPreview />
      <EventTypes variant="homepage" />
      <WhyChooseUs />
      <PromiseSection />
      <ReviewsSection />
      <HowItWorksPreview />
      <InsuranceSection />
      <InsuranceSectionTailwind />
      <CTASection />
    </>
  );
}
