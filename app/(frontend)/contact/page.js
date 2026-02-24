import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Redirect from "@/components/Redirect";

export const metadata = {
  title: "Contact Us - Private Blockchain Data Banking ",
  description:
    "Contact UCBI Banking for inquiries about our private blockchain data banking services, investment opportunities, and strategic treasury management solutions. Our team is here to assist you with any questions or partnership opportunities.",
};

const Contact = () => {
  return (
    <>
      <Header />
       <Redirect to="/#contact" delay={0} />
        <div className="contact_page" style={{height:'60vh'}}>
            <div className="container cline" 
            style={{borderLeft:'1px solid #dce0e5', borderRight:'1px solid #dce0e5', height:'100%'}}> 
                <div className="row">
                    <div className="col-lg-12" style={{marginTop:'200px'}}>
                        <div className="contact_page_content">
                            <h5 style={{color:'#112d50'}}>Contact Us</h5>
                            <p style={{color:'#112d50'}}>Redirecting to the main contact page...</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default Contact