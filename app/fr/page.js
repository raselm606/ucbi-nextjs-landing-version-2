import Footer from "@/components/fr/layouts/Footer";
import Header_b from "@/components/fr/layouts/Header_b";
import Advancing from "@/components/fr/sections/Advancing";
import BusinessModel_b from "@/components/fr/sections/b/BusinessModel_b";
import HeroSection_b from "@/components/fr/sections/b/HeroSection_b";
import BlogTwo from "@/components/fr/sections/blogs/BlogTwo";
import ContractInvestment from "@/components/fr/sections/ContractInvestment";
import Driving from "@/components/fr/sections/Driving";
import OurJourney from "@/components/fr/sections/OurJourney";
import Scaleable from "@/components/fr/sections/Scaleable";
import GrowthVideoSection from "@/components/fr/sections/video/GrowthVideoSection";
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