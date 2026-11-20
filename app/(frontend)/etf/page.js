import EtfCorporateNavbar from "@/components/corporate_etf/EtfCorporateNavbar";
import EtfHeroSection from "@/components/corporate_etf/EtfHeroSection";
import EtfPartnersCP from "@/components/corporate_etf/EtfPartnersCP";
import EtfOurApproach from "@/components/corporate_etf/EtfOurApproach";
import CryptoEtfDataProvider from "@/components/sections/CryptoEtfDataProvider";
import EtfFlow_etf from "@/components/corporate_etf/EtfFlow_etf";
import EtfMarketSnapshot_etf from "@/components/corporate_etf/EtfMarketSnapshot_etf";
import EtfSectionChooser from "@/components/sections/EtfSectionChooser/EtfSectionChooser";
import EtfExchangeOverview from "@/components/corporate_etf/EtfExchangeOverview/EtfExchangeOverview";
import KrakenEthChartExchange_etf from "@/components/corporate_etf/KrakenEthChartExchange_etf";
import EtfMarketPulse from "@/components/corporate_etf/EtfMarketPulse";
import SpotEtf_etf from "@/components/corporate_etf/SpotEtf_etf";
import EtfCommitment from "@/components/corporate_etf/EtfCommitment/EtfCommitment";
import EtfCryptoPrice from "@/components/corporate_etf/EtfCryptoPrice/EtfCryptoPrice";
import EtfCorporateBlogsFeed from "@/components/corporate_etf/EtfCorporateBlogs/EtfCorporateBlogsFeed";
import EtfCorporateFooter from "@/components/corporate_etf/EtfCorporateFooter/EtfCorporateFooter";
import typography from "./EtfPageTypography.module.css";

export const metadata = {
  title: "UCBI Banking - Ethereum ETF Market Data & Market Trends",
  description:
    "An institutional overview of the Ethereum ETF market featuring fund level data and performance metrics to support comparative analysis and ongoing monitoring of market trends",
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
      <EtfCorporateNavbar />
      <div className={typography.etfPage}>
      <EtfHeroSection />  
      <EtfPartnersCP />
      <EtfOurApproach />
      <EtfSectionChooser />
      <CryptoEtfDataProvider>
        <KrakenEthChartExchange_etf />
        <EtfMarketPulse />
        <EtfFlow_etf />
        <SpotEtf_etf />
        <EtfMarketSnapshot_etf />
        <EtfExchangeOverview />
      </CryptoEtfDataProvider>
      <EtfCommitment />
      <EtfCryptoPrice />
      <EtfCorporateBlogsFeed />
      <EtfCorporateFooter />
      </div>
    </>
  );
};

export default EtfPage;
