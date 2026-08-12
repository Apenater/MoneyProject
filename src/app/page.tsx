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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Founders />
        <Problem />
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
    </>
  );
}
