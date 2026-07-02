import Footer from "@/components/layouts/Footer";
import Header_b from "@/components/layouts/Header_b";
import Advancing from "@/components/sections/Advancing";
import HeroSection_b from "@/components/sections/b/HeroSection_b";
import BlogSection from "@/components/sections/BlogSection";
import ContractInvestment from "@/components/sections/ContractInvestment";
import Driving from "@/components/sections/Driving";
import GoalandEffort from "@/components/sections/GoalandEffort";
import OurJourney from "@/components/sections/OurJourney";
import PapersToken from "@/components/sections/PapersToken";
import Scaleable from "@/components/sections/Scaleable";
const Homepage = () => {
  return (
    <>
      {/* <Header /> */}
      <Header_b /> 
      <HeroSection_b />
      {/* <HeroSection /> */}
      
      <Driving />
      {/* <BusinessAdvisorySection /> */}
      <PapersToken />
      <OurJourney /> 
      <Advancing />
      <ContractInvestment />
      <GoalandEffort />
      <BlogSection />
      <Scaleable />
      <Footer />
    </>
  )
}

export default Homepage