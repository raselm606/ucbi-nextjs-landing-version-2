import AboutFramework from "@/components/corporate/AboutFramework/AboutFramework";
import ApproachVision from "@/components/corporate/ApproachVision/ApproachVision";
import Commitment from "@/components/corporate/Commitment/Commitment";
import CorporateBlogs from "@/components/corporate/CorporateBlogs/CorporateBlogs";
import CorporateFeatures from "@/components/corporate/CorporateFeatures";
import CorporateFooter from "@/components/corporate/CorporateFooter/CorporateFooter";
import CryptoPrice from "@/components/corporate/CryptoPrice/CryptoPrice";
import GlobalPresence from "@/components/corporate/GlobalPresence/GlobalPresence";
import HeroSection from "@/components/corporate/HeroSection";
import KeyFigures from "@/components/corporate/KeyFigures/KeyFigures";
import CorporateNavbar from "@/components/corporate/Navbar";
import OurApproach from "@/components/corporate/OurApproach";
import PartnersCP from "@/components/corporate/PartnersCP";
import StrategicTreasury from "@/components/corporate/StrategicTreasury/StrategicTreasury";
import WhatWeDo from "@/components/corporate/WhatWeDo/WhatWeDo";
const Homepage = () => {
  return (
    <> 
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
            <CorporateBlogs />
            <CorporateFooter />
          </main>
    </>
  )
}

export default Homepage