import Footer from "@/components/layouts/Footer";
import Header_b from "@/components/layouts/Header_b";
import Advancing from "@/components/sections/Advancing";
import BusinessModel_b from "@/components/sections/b/BusinessModel_b";
import HeroSection_b from "@/components/sections/b/HeroSection_b";
import BlogTwo from "@/components/sections/blogs/BlogTwo";
import ContractInvestment from "@/components/sections/ContractInvestment";
import Driving from "@/components/sections/Driving";
import OurJourney from "@/components/sections/OurJourney";
import Scaleable from "@/components/sections/Scaleable";
import GrowthVideoSection from "@/components/sections/video/GrowthVideoSection";
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
      <GrowthVideoSection /> 
      <BlogTwo />
      <Scaleable />
      <Footer />
    </>
  )
}

export default Homepage