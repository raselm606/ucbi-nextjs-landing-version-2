import Button from '@/components/ui/Button';
const PapersToken = () => {
  return (
    <>
    <div className="papers_token_section">
        <div className="container clinee">
            <div className="row ">
                <div className="col-lg-5 ">
                    <div className="white_paper_area" >
                       <h2 className="section_title_white" >
                        Whitepaper
                       </h2>
                       <p className="section_paragraph_white" >
                        The UCBI Banking Whitepaper provides a structured overview of UCBI’s blockchain-based data banking ecosystem It outlines the underlying architecture governance considerations and security principles supporting the development of a secure and institutionally aligned digital infrastructure
                        </p> 
                        <Button variant="primary" href="#" > Download</Button> 
                    </div>
                </div>
                <div className=" offset-lg-2 col-lg-5">
                    <div className="tokenomics_area" >
                        <h2 className="section_title_dark" >
                            Tokenomics  
                        </h2>
                        <p className="section_paragraph_dark" >
                            The UCBI tokenomics framework is presented for informational purposes only and describes the structural principles governing the issuance allocation and lifecycle of digital units within the UCBI ecosystem It outlines governance mechanisms technical constraints and alignment considerations without constituting
                        </p>
                        <Button style={{background:'#112E50 !important'}} variant="primary" href="#" > Download</Button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PapersToken