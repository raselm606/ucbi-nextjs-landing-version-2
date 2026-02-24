import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Redirect from "@/components/Redirect";

export const metadata = {
  title: "Financial Information - Private Blockchain Data Banking ",
  description:
    "UCBI Banking provides comprehensive financial information about our private blockchain data banking services, including investment performance, treasury management strategies, and insights into our exclusive private equity crypto-finance offerings. Stay informed about our financial activities and strategic initiatives to support long-term technological value creation within the UCBI Holding structure.",
};

const FinancialInformtion = () => {
  return (
    <>
      <Header />
       <Redirect to="https://finance.yahoo.com/quote/UCBI-USD/" delay={1000} />
        <div className="contact_page" style={{height:'60vh'}}>
            <div className="container cline" 
            style={{borderLeft:'1px solid #dce0e5', borderRight:'1px solid #dce0e5', height:'100%'}}> 
                <div className="row">
                    <div className="col-lg-12" style={{marginTop:'200px'}}>
                        <div className="contact_page_content">
                            <h5 style={{color:'#112d50'}}>Financial Information</h5>
                            <p style={{color:'#112d50'}}>Redirecting to the Yahoo Finance...</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default FinancialInformtion