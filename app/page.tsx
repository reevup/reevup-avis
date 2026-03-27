import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBanner from "@/components/LogoBanner";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import InteractiveDemo from "@/components/InteractiveDemo";
import Benefits from "@/components/Benefits";
import AppPreview from "@/components/AppPreview";
import LoyaltyPreview from "@/components/LoyaltyPreview";
import Comparison from "@/components/Comparison";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <ScrollToTop />
      <main>
        <Hero />
        <LogoBanner />
        <Stats />
        <HowItWorks />
        <Features />
        <InteractiveDemo />
        <Benefits />
        <AppPreview />
        <LoyaltyPreview />
        <Comparison />
        <ROICalculator />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
