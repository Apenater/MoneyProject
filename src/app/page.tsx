import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Founders from "@/components/Founders";
import Problem from "@/components/Problem";
import WhatYouGet from "@/components/WhatYouGet";
import ForWhom from "@/components/ForWhom";
import HonestNo from "@/components/HonestNo";
import Curriculum from "@/components/Curriculum";
import PresencialEvent from "@/components/PresencialEvent";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import StickyCtaBar from "@/components/StickyCtaBar";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        {/* Problem now follows the hook directly — while the headline's
            attention is still highest is the right moment to name the
            pain, before introducing who's going to fix it. Founders/
            TrustBar used to sit between Hero and Problem, delaying the
            emotional beat the copy is built around. */}
        <Problem />
        <Founders />
        <TrustBar />
        <WhatYouGet />
        <ForWhom />
        <HonestNo />
        <Curriculum />
        <PresencialEvent />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCtaBar />
    </>
  );
}
