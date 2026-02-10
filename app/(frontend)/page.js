import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Advancing from "@/components/sections/Advancing";
import BlogSection from "@/components/sections/BlogSection";
import ContractInvestment from "@/components/sections/ContractInvestment";
import Driving from "@/components/sections/Driving";
import GoalandEffort from "@/components/sections/GoalandEffort";
import HeroSection from "@/components/sections/HeroSection";
import OurJourney from "@/components/sections/OurJourney";
import PapersToken from "@/components/sections/PapersToken";
import Partners from "@/components/sections/Partners_two";
import Scaleable from "@/components/sections/Scaleable";
const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Partners />
      <Driving />
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