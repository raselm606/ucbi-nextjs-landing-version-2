import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export const metadata = {
  title: "Submit a Request - Private Blockchain Data Banking ",
  description:
    "contact us to submit a request for our private blockchain data banking services, including inquiries about investment opportunities, treasury management solutions, and partnership collaborations. Our team is here to assist you with any questions or specific requests related to our exclusive private equity crypto-finance offerings within the UCBI Holding structure.",
};

const SubmitRequest = () => {
  return (
    <>
      <Header />
       {/* <Redirect to="/#submit-request" delay={0} /> */}
        <div className="contact_page" style={{height:'60vh'}}>
            <div className="container cline" 
            style={{borderLeft:'1px solid #dce0e5', borderRight:'1px solid #dce0e5', height:'100%'}}> 
                <div className="row">
                    <div className="col-lg-12" style={{marginTop:'200px'}}>
                        <div className="contact_page_content">
                            <h5 style={{color:'#112d50'}}>Submit Request </h5>
                            <p style={{color:'#112d50'}}>Redirecting to the Submit Request...</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default SubmitRequest