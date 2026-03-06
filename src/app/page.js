import MovingStrip from "@/components/MovingStrip";

import Hero from "@/components/Hero";
import LaunchIncluded from "@/components/LaunchIncluded";
import TestimonialSection from "@/components/TestimonialSection";
import LaunchPhases from "@/components/LaunchPhases";
import ReferenceSection from "@/components/ReferenceSection";
import UnlockFeatures from "@/components/UnlockFeatures";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
        <Navbar />
        <Hero />
        <MovingStrip />
        <LaunchIncluded />
        <TestimonialSection />
        <LaunchPhases />
        <ReferenceSection />
        <UnlockFeatures/>
        <FAQSection/>
        <FinalCTA/>
        <Footer/>
    
    </main>
  );
}
