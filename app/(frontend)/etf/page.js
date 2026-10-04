import Footer from "@/components/layouts/Footer";
import Header_b from "@/components/layouts/Header_b";
import EtfHeroSection from "@/components/sections/b/EtfHeroSection";
import EtfFlow from "@/components/sections/EtfFlow";
import EtfOverview from "@/components/sections/EtfOverview";
import Scaleable from "@/components/sections/Scaleable";
import SpotEtf from "@/components/sections/SpotEtf";
import CryptoEtfDataProvider from "@/components/sections/CryptoEtfDataProvider";

const EtfPage = () => {
  return (
    <> 
      <Header_b /> 
      <EtfHeroSection />  
      <CryptoEtfDataProvider>
        <EtfFlow />
        <SpotEtf />
        <EtfOverview />
      </CryptoEtfDataProvider>
      <Scaleable />
      <Footer />
    </>
  );
};

export default EtfPage;
