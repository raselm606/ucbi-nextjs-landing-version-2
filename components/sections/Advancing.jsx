import { advanceData } from "@/lib/mock-data/advancing";
const Advancing =  () => { 

  return (
    <>
    <div className="advancing_section" id="treasury-management">
        <div className="container cline line_left line_right">
            <div className="row">
                <div className="col-lg-4">
                    <div className="advancing_content">
                        <h2 className="section_title_dark" >
                           Advancing  <br />
                          Through Structured Growth
                        </h2>
                    </div>   
                </div>

                <div className="offset-lg-2 col-lg-6">
                    {advanceData.map((item, index) => (
                    <div className="advancing_para" key={item.id}>
                        <h5 >{item.title}</h5>
                        <p > {item.desc}</p>
                    </div>
                    ))}
                     
                </div>


            </div>
        </div>
    </div>
    </>
  )
}

export default Advancing