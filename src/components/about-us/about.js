import "../../assests/css/about.css";
import { useMediaQuery } from "react-responsive";

import Abt from "../../assests/img/about.png";
import Vision from "../../assests/img/vision.png";
import Mission from "../../assests/img/mission.png";
import Core from "../../assests/img/core.png";
import Img1 from "../../assests/img/img1.png";
import Img2 from "../../assests/img/img2.png";
import Img3 from "../../assests/img/img3.png";
import Img4 from "../../assests/img/img4.png";
import Img5 from "../../assests/img/img5.png";
import Contact from "../contact-us/contact";
import Nav from "../navbar/nav";

function About() {
  const isAbout = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <div className="about-us">
        {isAbout ? (
          <div className="about-phone">
            <div className="row justify-content-around">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                <h1 className="about text-center">ABOUT US</h1>
                <img src={Abt} className="about-img mt-5"></img>

                <p className="about-para mt-5">
                  NexiGO Energy pioneers in Research and development of Advanced
                  Energy solutions to EV and Energy Storage markets. We
                  specialize in Designing, Developing and Delivering highly
                  efficient battery packs through Innovative packing methods and
                  bringing cutting edge cell technologies to market. Our
                  technology sets new standards in performance, reliability and
                  safety.
                </p>
              </div>
            </div>

            <div className="vision-sec">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h2 className="our text-center">
                    Our <span className="vision">Vision</span>
                  </h2>
                  <img
                    src={Vision}
                    alt="vision"
                    className="vision-img mt-5"
                  ></img>

                  <p className="vision-para mt-5">
                    Our Vision is to increase Global adoption of sustainable
                    energy by Designing, Developing and Delivering cutting edge
                    technologies to Electric Vehicles and Energy storage
                    markets.
                  </p>
                </div>
              </div>
            </div>

            <div className="mission-sec">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h2 className="mis text-center">
                    Our <span className="mission">Mission</span>
                  </h2>
                  <img
                    src={Mission}
                    alt="mission"
                    className="mission-img mt-5"
                  ></img>
                  <p className="mission-para mt-5">
                    Our Missions is to be best in the market of providing energy
                    solutions. We seek to develop the most technologically
                    advanced battery packs keeping Quality, Reliability,
                    affordability, and Value in mind. We Use technology as a
                    Guide to bring trust, reduce anxiety, provide education to
                    end user and contribute to global goal of switching to
                    sustainable energy.
                  </p>
                </div>
              </div>
            </div>

            <div className="core-sec">
              <div className="row justify-content-center mt-5">
                <div className="col-6">
                  <h1 className="core ">Core Values</h1>

                  <img src={Core} alt="core" className="core-img"></img>
                  <p className="provide mb-5">
                    To provide clean and reliable energy storage solution that
                    enhance the way people live and work around the world.
                  </p>
                  <div className="row ">
                    <div className="col-2">
                      <img src={Img1} alt="quality" className="img1"></img>
                    </div>
                    <div className="col-9">
                      <p className="core-head mb-0">QUALITY</p>
                      <p className="points mb-0 mt-2">
                        Manufactured using the latest technology and stringent
                        quality control, our battery products are designed to
                        exceed in performance and reliability.
                      </p>
                      <p className="points mt-2">
                        Obtaining the best possible outcome in the least
                        wasteful manner.
                      </p>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-2">
                      <img src={Img2} alt="quality" className="img1"></img>
                    </div>
                    <div className="col-9">
                      <p className="core-head mb-0">RELIABILITY</p>
                      <p className="points mb-0 mt-2">
                        We uphold the values and principles of our organization
                        in every action and decision.
                      </p>
                      <p className="points mt-2">
                        To do our job to the best of our ability.
                      </p>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-2">
                      <img src={Img3} alt="quality" className="img1"></img>
                    </div>
                    <div className="col-9">
                      <p className="core-head mb-0">AFFORDABILITY</p>
                      <p className="points mb-0 mt-2">
                        An affordable product or services is one that is within
                        most people’s budget then our product is affordable.
                      </p>
                      <p className="points mt-2">
                        We develop affordable product that can easy to carry.
                      </p>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-2">
                      <img src={Img4} alt="quality" className="img1"></img>
                    </div>
                    <div className="col-9">
                      <p className="core-head mb-0">INNOVATION</p>
                      <p className="points mb-0 mt-2">
                        We advance through creativity and efficient processes to
                        implement new ideas.
                      </p>
                      <p className="points mt-2">
                        We continue to maintain our leadership position.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-2">
                      <img src={Img5} alt="quality" className="img1"></img>
                    </div>
                    <div className="col-9">
                      <p className="core-head mb-0">CUSTOMER DELIGHT</p>
                      <p className="points mb-0 mt-2">
                        Customer satisfaction is at the center of what we do
                        everyday.{" "}
                      </p>
                      <p className="points mb-0 mt-2">
                        We are a trusted partner of our customer.{" "}
                      </p>
                      <p className="points mt-2 mb-0">
                        We build and maintain effective and proactive
                        relationship with customers.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="row justify-content-around">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 p-0">
                <h1 className="about">ABOUT US</h1>
                <p className="about-para mt-2">
                  NexiGO Energy pioneers in Research and development of Advanced
                  Energy solutions to EV and Energy Storage markets. We
                  specialize in Designing, Developing and Delivering highly
                  efficient battery packs through Innovative packing methods and
                  bringing cutting edge cell technologies to market. Our
                  technology sets new standards in performance, reliability and
                  safety.
                </p>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5">
                <img src={Abt} className="about-img"></img>
              </div>
            </div>
            <div className="vision-sec">
              <div className="row justify-content-center">
                <div className="col-1"></div>
                <div className="col-4 mt-3">
                  <img src={Vision} alt="vision" className="vision-img"></img>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                  <h2 className="our">
                    Our <span className="vision">Vision</span>
                  </h2>
                  <p className="vision-para">
                    Our Vision is to increase Global adoption of sustainable
                    energy by Designing, Developing and Delivering cutting edge
                    technologies to Electric Vehicles and Energy storage
                    markets.
                  </p>
                </div>
              </div>
            </div>

            <div className="mission-sec">
              <div className="row justify-content-center">
                <div className="col-1"></div>
                <div className="col-5">
                  <h2 className="mis">
                    Our <span className="mission">Mission</span>
                  </h2>
                  <p className="mission-para">
                    Our Missions is to be best in the market of providing energy
                    solutions. We seek to develop the most technologically
                    advanced battery packs keeping Quality, Reliability,
                    affordability, and Value in mind. We Use technology as a
                    Guide to bring trust, reduce anxiety, provide education to
                    end user and contribute to global goal of switching to
                    sustainable energy.
                  </p>
                </div>
                <div className="col-1"></div>

                <div className="col-4 mt-3">
                  <img
                    src={Mission}
                    alt="mission"
                    className="mission-img"
                  ></img>
                </div>
              </div>
            </div>

            <div className="core-sec">
              <h1 className="core">Core Values</h1>
              <div className="row justify-content-center mt-5">
                <div className="col-1"></div>

                <div className="col-4">
                  <img src={Core} alt="core" className="core-img"></img>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                  <p className="provide mb-5">
                    To provide clean and reliable energy storage solution that
                    enhance the way people live and work around the world.
                  </p>
                  <div className="row ">
                    <div className="col-2">
                      <img src={Img1} alt="quality" className="img1"></img>
                    </div>
                    <div className="col-9">
                      <p className="core-head mb-0">QUALITY</p>
                      <p className="points mb-0 mt-2">
                        Manufactured using the latest technology and stringent
                        quality control, our battery products are designed to
                        exceed in performance and reliability.
                      </p>
                      <p className="points mt-2">
                        Obtaining the best possible outcome in the least
                        wasteful manner.
                      </p>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-2">
                      <img src={Img2} alt="quality" className="img1"></img>
                    </div>
                    <div className="col-9">
                      <p className="core-head mb-0">RELIABILITY</p>
                      <p className="points mb-0 mt-2">
                        We uphold the values and principles of our organization
                        in every action and decision.
                      </p>
                      <p className="points mt-2">
                        To do our job to the best of our ability.
                      </p>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-2">
                      <img src={Img3} alt="quality" className="img1"></img>
                    </div>
                    <div className="col-9">
                      <p className="core-head mb-0">AFFORDABILITY</p>
                      <p className="points mb-0 mt-2">
                        An affordable product or services is one that is within
                        most people’s budget then our product is affordable.
                      </p>
                      <p className="points mt-2">
                        We develop affordable product that can easy to carry.
                      </p>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-2">
                      <img src={Img4} alt="quality" className="img1"></img>
                    </div>
                    <div className="col-9">
                      <p className="core-head mb-0">INNOVATION</p>
                      <p className="points mb-0 mt-2">
                        We advance through creativity and efficient processes to
                        implement new ideas.
                      </p>
                      <p className="points mt-2">
                        We continue to maintain our leadership position.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-2">
                      <img src={Img5} alt="quality" className="img1"></img>
                    </div>
                    <div className="col-9">
                      <p className="core-head mb-0">CUSTOMER DELIGHT</p>
                      <p className="points mb-0 mt-2">
                        Customer satisfaction is at the center of what we do
                        everyday.{" "}
                      </p>
                      <p className="points mb-0 mt-2">
                        We are a trusted partner of our customer.{" "}
                      </p>
                      <p className="points mt-2 mb-0">
                        We build and maintain effective and proactive
                        relationship with customers.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Contact />
    </>
  );
}

export default About;
