import Image from "next/image";
import timelineImage from '../../../public/images/timeline_line.png';
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
                <span>Notre parcours</span> 
                <h2>Construire l’avenir  <br /> de la finance numérique</h2> 
                <p>Notre parcours est guidé par une vision claire et un engagement envers l'innovation et l'impact à long terme</p>
                </div>
            </div>
          </div>

          <div className="timeline_area">
            <Image   className="line_img" src={timelineImage} alt="timeline" />
            <div className="row justify-content-center  mt-5">
              <div className="col-lg-2">
                  <div className="timeline_item timeline_one"  >
                    <div className="icon_ara">
                      <BankIcon  />
                    </div>
                    <h4>Année de création</h4>
                    <p>Poser les fondements <br /> d'un avenir décentralisé</p>
                  </div>
              </div>

              <div className="offset-lg-1 col-lg-2">
                  <div className="timeline_item timeline_two"  >
                    <div className="icon_ara">
                      <RocketIcon />
                    </div>
                    <h4>Année 1</h4>
                    <p> Développer l’écosystème <br /> et les infrastructures essentielles</p>
                  </div>
              </div>

              <div className="offset-lg-1 col-lg-2">
                  <div className="timeline_item timeline_three"  >
                    <div className="icon_ara">
                      <ChartIcon />
                    </div>
                    <h4>Année 3</h4>
                    <p>Expansion et  collaborations stratégiques </p>
                  </div>
              </div>

              <div className=" col-lg-2"> 
                  <div className="timeline_item timeline_four"  >
                    <div className="icon_ara">
                      <FlagIcon />
                    </div>
                    <h4>Aujourd’hui</h4>
                    <p>Une vision tournée vers un impact    mondial et une croissance durable</p>
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