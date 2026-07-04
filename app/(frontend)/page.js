import Footer from "@/components/layouts/Footer";
import Header_b from "@/components/layouts/Header_b";
import Advancing from "@/components/sections/Advancing";
import BusinessModel_b from "@/components/sections/b/BusinessModel_b";
import HeroSection_b from "@/components/sections/b/HeroSection_b";
import BlogSection from "@/components/sections/BlogSection";
import ContractInvestment from "@/components/sections/ContractInvestment";
import Driving from "@/components/sections/Driving";
import GoalandEffort from "@/components/sections/GoalandEffort";
import OurJourney from "@/components/sections/OurJourney";
import Scaleable from "@/components/sections/Scaleable";
const Homepage = () => {
  return (
    <> 
      <Header_b /> 
      <HeroSection_b /> 
      <Driving /> 
      <BusinessModel_b /> 
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