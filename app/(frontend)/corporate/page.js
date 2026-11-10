import CorporateNavbar from "@/components/corporate/Navbar";
import HeroSection from "@/components/corporate/HeroSection";
import PartnersCP from "@/components/corporate/PartnersCP";
import CorporateFeatures from "@/components/corporate/CorporateFeatures";
import OurApproach from "@/components/corporate/OurApproach";
import AboutFramework from "@/components/corporate/AboutFramework/AboutFramework";
import KeyFigures from "@/components/corporate/KeyFigures/KeyFigures";
import WhatWeDo from "@/components/corporate/WhatWeDo/WhatWeDo";
import StrategicTreasury from "@/components/corporate/StrategicTreasury/StrategicTreasury";
import GlobalPresence from "@/components/corporate/GlobalPresence/GlobalPresence";
import ApproachVision from "@/components/corporate/ApproachVision/ApproachVision";
import Commitment from "@/components/corporate/Commitment/Commitment";
import CryptoPrice from "@/components/corporate/CryptoPrice/CryptoPrice";
import CorporateFooter from "@/components/corporate/CorporateFooter/CorporateFooter";

export default function Corporate() {
  return (
    <main>
      <CorporateNavbar />
      <HeroSection />
      <PartnersCP />
      <CorporateFeatures />
      <OurApproach />
      <AboutFramework />
      <KeyFigures />
      <WhatWeDo />
      <StrategicTreasury />
      <GlobalPresence />
      <ApproachVision />
      <Commitment />
      <CryptoPrice />
      <CorporateFooter />
    </main>
  );
}
