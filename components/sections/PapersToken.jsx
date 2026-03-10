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
                        The Whitepaper provides a structured overview of the Ethereum-focused treasury and Private Investment platform It outlines the diversified allocation governance framework and risk principles supporting disciplined multi-asset growth long-term sustainability and institutional alignment
                        </p> 
                        <Button variant="primary" href="https://doc.ucbibanking.io/ucbi_whitepaper" target="_blank"> Download</Button> 
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="middle_paper"></div>
                </div>
                <div className="  col-lg-5">
                    <div className="tokenomics_area" >
                        <h2 className="section_title_dark" >
                            Tokenomics  
                        </h2>
                        <p className="section_paragraph_dark" >
                            The UCBI tokenomics framework is presented for informational purposes only and describes the structural principles governing the issuance allocation and lifecycle of digital units within the UCBI ecosystem It outlines governance mechanisms technical constraints and alignment considerations without constituting
                        </p>
                        <Button style={{background:'#112E50 !important'}} variant="primary" 
                        href="https://doc.ucbibanking.io/ucbi_tokenomics" target="_blank"> Download</Button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PapersToken