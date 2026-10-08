import Footer from "@/components/layouts/Footer";
import Header_b from "@/components/layouts/Header_b";
import EtfHeroSection from "@/components/sections/b/EtfHeroSection";
import CryptoEtfDataProvider from "@/components/sections/CryptoEtfDataProvider";
import EtfFlow from "@/components/sections/EtfFlow";
import EtfOverview from "@/components/sections/EtfOverview";
import EtfSectionChooser from "@/components/sections/EtfSectionChooser/EtfSectionChooser";
import ExchangeOverview from "@/components/sections/ExchangeOverview/ExchangeOverview";
import KrakenEthChartExchange from "@/components/sections/KrakenEthChartExchange/KrakenEthChartExchange";
import Scaleable from "@/components/sections/Scaleable";
import SpotEtf from "@/components/sections/SpotEtf";

export const metadata = {
  title: "UCBI Banking - Ethereum ETF Market Data & Market Trends",
  description:
    "UCBI Banking tracks Ethereum ETFs with market data inflows and outflows trading volumes and trends to monitor the evolution of Ethereum investments",
  keywords: [
    "UCBI Banking",
    "Ethereum ETFs",
    "Ethereum ETF data",
    "Ethereum ETF market data",
    "Ethereum ETF flows",
    "Ethereum ETF inflows",
    "Ethereum ETF outflows",
    "Ethereum ETF trends",
    "Ethereum market trends",
    "Ethereum market data",
    "Ethereum investments",
    "ETF capital flows",
    "Ethereum investment flows",
    "Ethereum",
  ],
};

const EtfPage = () => {
  return (
    <> 
      <Header_b /> 
      <EtfHeroSection />  
      <EtfSectionChooser />
      <CryptoEtfDataProvider>
        <KrakenEthChartExchange />
        <EtfFlow />
        <SpotEtf />
        <EtfOverview />
        <ExchangeOverview />
      </CryptoEtfDataProvider>
      <Scaleable />
      <Footer />
    </>
  );
};

export default EtfPage;
