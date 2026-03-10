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
                        The Whitepaper provides a well structured overview of the Ethereum focused treasury and Private Investment platform It outlines the diversified allocation governance framework and risk principles supporting disciplined multi asset growth long term sustainability and institutional alignment
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
                            Strategy Advisory  
                        </h2>
                        <p className="section_paragraph_dark" >
                            The Strategy Advisory framework is presented for informational purposes only and describes structural principles guiding treasury structuring and strategic development It outlines governance standards and alignment considerations without constituting financial solicitation or public offering
                        </p>
                        <Button style={{background:'#112E50 !important'}} variant="primary" 
                        href="https://calendly.com/ucbibanking" target="_blank"> Take an Appointment</Button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PapersToken