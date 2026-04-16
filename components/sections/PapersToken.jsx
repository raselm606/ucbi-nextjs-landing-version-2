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
                        Business Model
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
                            Strategy Advisory services are available through formal appointment and structured engagement The scope covers treasury structuring blockchain integration corporate finance strategy and long-term strategic development delivered within a private confidential and non-public framework without constituting financial solicitation
                        </p>
                        <Button style={{background:'#112E50 !important'}} variant="primary" 
                        href="https://calendly.com/ucbibanking" target="_blank"> Appointment</Button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PapersToken