import "../../assests/css/cap.css";
import Cap1 from "../../assests/img/cap1.png";
import Cap2 from "../../assests/img/cap2.png";
import Nav from "../navbar/nav";
import { useMediaQuery } from "react-responsive";

import Cus1 from "../../assests/img/cus1.png";
import Cus2 from "../../assests/img/cus2.png";
import Cus3 from "../../assests/img/cus3.png";
import Contact from "../contact-us/contact";

function Cap() {
  const isCap = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <div className="cap-sec">
        {isCap ? (
          <div className="cap-phone">
            <div className="innovation-sec">
              <div className="row justify-content-center">
                <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11">
                  <h3 className="inno text-center">Innovation</h3>
                  <img src={Cap1} alt="cap" className="inno-img mt-5"></img>
                  <ul className="inno-para  mt-5">
                    <li>Patent Pending Thermal Management Techniques</li>
                    <li>Efficiency improvement in power and energy delivery</li>
                    <li>
                      Research and Development to enable Ultra Fast charging,
                      long life and Safety
                    </li>
                    <li>
                      Innovation in IoT and data collection for continuous
                      product improvement
                    </li>
                    <li>
                      Unique packaging methods to Increase safety and
                      reliability
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>

            <div className="custom-sec">
              <div className="row justify-content-evenly mt-5">
                <h3 className="custom">Custom Design</h3>

                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mt-5">
                  <div className="card cus-card">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <img src={Cus1} alt="design" className="design"></img>
                        <p className="cus-para mt-3">
                          Our innovations are scalable and modular to fit in to
                          any Shape, size and energy needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mt-5">
                  <div className="card cus-card">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <img src={Cus2} alt="design" className="design"></img>
                        <p className="cus-para mt-3">
                          Modular and easily customizable Battery management
                          System Architecture
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mt-5">
                  <div className="card cus-card">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <img src={Cus3} alt="design" className="design"></img>
                        <p className="cus-para mt-3">
                          Proven Thermal management solutions for various cell
                          formats.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="state-sec">
              <div className="row justify-content-center">
                <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11 p=0">
                  <h3 className="state text-center">
                    State of the Art R&D LAB
                  </h3>
                  <img src={Cap2} alt="cap" className="state-img mt-5"></img>

                  <ul className="state-para mt-5">
                    <li>Patent Pending Thermal Management Techniques</li>
                    <li>Efficiency improvement in power and energy delivery</li>
                    <li>
                      Research and Development to enable Ultra Fast charging,
                      long life and Safety
                    </li>
                    <li>
                      Innovation in IoT and data collection for continuous
                      product improvement
                    </li>
                    <li>
                      Unique packaging methods to Increase safety and
                      reliability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="innovation-sec">
              <div className="row justify-content-center">
                <div className="col-1"></div>
                <div className="col-xl-4 col-lg-4 col-md-4 ">
                  <img src={Cap1} alt="cap" className="inno-img"></img>
                </div>
                <div className="col-1"></div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                  <h3 className="inno">Innovation</h3>
                  <ul className="inno-para ps-0 ms-3">
                    <li>Patent Pending Thermal Management Techniques</li>
                    <li>Efficiency improvement in power and energy delivery</li>
                    <li>
                      Research and Development to enable Ultra Fast charging,
                      long life and Safety
                    </li>
                    <li>
                      Innovation in IoT and data collection for continuous
                      product improvement
                    </li>
                    <li>
                      Unique packaging methods to Increase safety and
                      reliability
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>
            <div className="custom-sec">
              <h3 className="custom">Custom Design</h3>
              <div className="row justify-content-evenly mt-5">
                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="card cus-card">
                    <div className="row justify-content-center">
                      <div className="col">
                        <img src={Cus1} alt="design" className="design"></img>
                        <p className="cus-para mt-3">
                          Our innovations are scalable and modular to fit in to
                          any Shape, size and energy needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="card cus-card">
                    <div className="row justify-content-center">
                      <div className="col">
                        <img src={Cus2} alt="design" className="design"></img>
                        <p className="cus-para1 mt-3">
                          Modular and easily customizable Battery management
                          System Architecture
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="card cus-card">
                    <div className="row justify-content-center">
                      <div className="col">
                        <img src={Cus3} alt="design" className="design"></img>
                        <p className="cus-para2 mt-3">
                          Proven Thermal management solutions for various cell
                          formats
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="state-sec">
              <div className="row justify-content-center">
                <div className="col-1"></div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                  <h3 className="state">State of the Art R&D LAB</h3>
                  <ul className="state-para ps-0 ms-3">
                    <li>Patent Pending Thermal Management Techniques</li>
                    <li>Efficiency improvement in power and energy delivery</li>
                    <li>
                      Research and Development to enable Ultra Fast charging,
                      long life and Safety
                    </li>
                    <li>
                      Innovation in IoT and data collection for continuous
                      product improvement
                    </li>
                    <li>
                      Unique packaging methods to Increase safety and
                      reliability
                    </li>
                  </ul>{" "}
                </div>
                <div className="col-1 p-0"></div>

                <div className="col-xl-4 col-lg-4 col-md-4">
                  <img src={Cap2} alt="cap" className="state-img"></img>
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

export default Cap;
