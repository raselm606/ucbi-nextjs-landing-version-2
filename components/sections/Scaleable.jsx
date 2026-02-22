import Button from '@/components/ui/Button'
const Scaleable = () => {
  return (
    <>
    <div className="scaleable_section">
        <div className="container cline">
            <div className="row">
                <div className="col-lg-12">
                    <div className="scaleable_content">
                        <h2 className="section_title_white" >
                            Secure and scalable digital infrastructure <br /> Built for long-term institutional use
                        </h2>
                         <Button data-bs-toggle="modal"   href="#exampleModal" variant="primary">Submit Request</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Scaleable