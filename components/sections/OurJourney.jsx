import Image from "next/image";
import timelineImage from '../../public/images/timeline_line.png';
import {
  BankIcon,
  ChartIcon,
  FlagIcon,
  RocketIcon
} from "./b/HeroIcons";

const OurJourney = () => {
  return (
    <>
    <div className="ourjourney_section">
        <div className="container cline left_1000">
          <div className="row">
            <div className="col-lg-4">
              <div className="journey_content"  >
                <span>Our Journey</span> 
                <h2>Building the Future  of <br /> Digital Finance</h2> 
                <p>Our journey is driven by a clear vision and a commitment to innovation and long term impact</p>
                </div>
            </div>
          </div>

          <div className="timeline_area">
            <Image   className="line_img" src={timelineImage} alt="timeline" />
            <div className="row justify-content-center  mt-5">
              <div className="col-lg-2">
                  <div className="timeline_item timeline_one"  >
                    <div className="icon_ara">
                      <BankIcon />
                    </div>
                    <h4>Founding Year</h4>
                    <p>Laying the foundation <br /> for a decentralized future</p>
                  </div>
              </div>

              <div className="offset-lg-1 col-lg-2">
                  <div className="timeline_item timeline_two"  >
                    <div className="icon_ara">
                      <RocketIcon />
                    </div>
                    <h4>Year 1</h4>
                    <p>Building the ecosystem <br /> and core infrastructure</p>
                  </div>
              </div>

              <div className="offset-lg-1 col-lg-2">
                  <div className="timeline_item timeline_three"  >
                    <div className="icon_ara">
                      <ChartIcon />
                    </div>
                    <h4>Year 3</h4>
                    <p>Expansion & strategic <br /> collaborations </p>
                  </div>
              </div>

              <div className=" col-lg-2"> 
                  <div className="timeline_item timeline_four"  >
                    <div className="icon_ara">
                      <FlagIcon />
                    </div>
                    <h4>Today</h4>
                    <p>Focused on global impact <br /> and sustainable growth</p>
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