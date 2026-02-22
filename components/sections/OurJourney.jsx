import Image from "next/image";
import timelineImage from '../../public/images/timeline_line.png';
const OurJourney = () => {
  return (
    <>
    <div className="ourjourney_section">
        <div className="container cline left_100">
          <div className="row">
            <div className="col-lg-4">
              <div className="journey_content"  >
                <h2 className="section_title_white">Our journey over the years 
                   <br /> reflects long-term vision  <br /> and progress</h2> 
                </div>
            </div>
          </div>

          <div className="timeline_area">
            <Image   className="line_img" src={timelineImage} alt="timeline" />
            <div className="row justify-content-center  mt-5">
              <div className="col-lg-2">
                  <div className="timeline_item timeline_one"  >
                    <h4>Founding Year</h4>
                    <p>Laying the foundation 2019</p>
                  </div>
              </div>

              <div className="offset-lg-1 col-lg-2">
                  <div className="timeline_item timeline_two"  >
                    <h4>Year 3</h4>
                    <p>Building the Ecosystem</p>
                  </div>
              </div>

              <div className="offset-lg-1 col-lg-2">
                  <div className="timeline_item timeline_three"  >
                    <h4>Year 5</h4>
                    <p>Expansion & Market Validation</p>
                  </div>
              </div>

              <div className="offset-lg-1 col-lg-2"> 
                  <div className="timeline_item timeline_four"  >
                    <h4>Today</h4>
                    <p>Focused on private expansion</p>
                  </div> 
              </div>

            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default OurJourney