import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Redirect from "@/components/Redirect";

export const metadata = {
  title: "Treasury Management - Private Blockchain Data Banking ",
  description:
    "UCBI Banking offers strategic treasury management services for private blockchain data banking, including asset allocation, risk management, and liquidity optimization to support long-term technological value creation within the UCBI Holding structure reserved for selected partners.",
};

const TreasuryManagement = () => {
  return (
    <>
      <Header />
       <Redirect to="/#treasury-management" delay={0} />
        <div className="contact_page" style={{height:'60vh'}}>
            <div className="container cline" 
            style={{borderLeft:'1px solid #dce0e5', borderRight:'1px solid #dce0e5', height:'100%'}}> 
                <div className="row">
                    <div className="col-lg-12" style={{marginTop:'200px'}}>
                        <div className="contact_page_content">
                            <h5 style={{color:'#112d50'}}>Treasury Management </h5>
                            <p style={{color:'#112d50'}}>Redirecting to the Treasury Management ...</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default TreasuryManagement