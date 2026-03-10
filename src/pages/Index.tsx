import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import JourneySection from "@/components/JourneySection";
import TransparencySection from "@/components/TransparencySection";
import FreshnessMetrics from "@/components/FreshnessMetrics";
import SeasonalCalendar from "@/components/SeasonalCalendar";
import FarmerProfiles from "@/components/FarmerProfiles";
import FullWidthFarmImage from "@/components/FullWidthFarmImage";
import StatCounters from "@/components/StatCounters";
import BlogSection from "@/components/BlogSection";
import QualityAssurance from "@/components/QualityAssurance";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <JourneySection />
        <TransparencySection />
        <FreshnessMetrics />
        <SeasonalCalendar />
        <FarmerProfiles />
        <FullWidthFarmImage />
        <StatCounters />
        <BlogSection />
        <QualityAssurance />
        <TestimonialsSection />
        <CTAFooter />
      </main>
    </SmoothScroll>
  );
};

export default Index;
