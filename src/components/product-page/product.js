import "../../assests/css/product.css";
import Vigor from "../../assests/img/vigor.png";
import Vivid from "../../assests/img/vivid.png";
import { useMediaQuery } from "react-responsive";
import Vig from "../../assests/img/vig-ph.png";
import Vid from "../../assests/img/vid-ph.png";
import Nav from "../navbar/nav";

import Contact from "../contact-us/contact";
function Product() {
  const isProduct = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <div className="product">
        {isProduct ? (
          <div className="vigor-phone">
            <h1 className="vigor ">VIGOR</h1>
            <h3 className="best mt-3">BEST IN CLASS PERFORMANCE</h3>
            <h5 className="you mt-3">
              YOU NEED <span className="vig">VIGOR</span> FOR ON-THE-GO-ENERGY
            </h5>
            <div className="row justify-content-center">
              <div className="col-11 mt-5 p-0">
                <img src={Vig} alt="vigor" className="vig-img mt-4"></img>

                <p className="vigor-para mt-5">
                  The VIGOR is a breakthrough in ENERGY needs for a
                  Light-Electric Vehicle. This HIGHLY EFFICIENT battery pack is
                  best in class in weight, performance, reliability and safety.
                  This rechargeable battery pack is capable of FAST CHARGING(1
                  hour) with out sacrificing the life. Our Innovative and
                  proprietary packing methods sets new standards in POWER and
                  ENERGY delivery.
                </p>
                <p className="vigor-points">
                  <ul>
                    <li className="mt-1">
                      {" "}
                      Configurable and scalable to user needs
                      <p className="mb-0">Energy: 1.4kwh - 2.3kwh</p>
                      <p className="mb-0">Voltage: 46.8V - 57.6V nominal</p>
                    </li>
                    <li className="mt-1">
                      Delivers 1.5x more power within the same class of weight
                      and capacity
                    </li>
                    <li className="mt-1">
                      Industrial grade soft over molding provides impact
                      protection
                    </li>
                    <li className="mt-1">
                      User Configurable Handle Design for multiple carrying and
                      lifting positions
                    </li>
                    <li className="mt-1">IOT Enabled</li>
                    <li className="mt-1">Warranty*:3yrs / 65,000 kms</li>
                    <li className="mt-1">
                      Perfect for everyday short distance commuters
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="vivid-sec p-0">
              <h1 className="vivid ">VIVID</h1>
              <h3 className="ultra mt-3">ULTRA FAST CHARGING & LIFE</h3>
              <h5 className="you1 mt-3">
                YOU NEED <span className="vid">VIVID</span> FOR PRODUCTIVITY &
                NO DOWN TIME
              </h5>
              <div className="row justify-content-center">
                <div className="col-11 mt-5">
                  <img src={Vid} alt="vivid" className="vid-img mt-4"></img>

                  <p className="vivid-para mt-5">
                    The VIVID is best in the WORLD battery pack for light
                    electric vehicles. VIVID brings the best in both world of
                    ENERGY and POWER. Our Innovative and proprietary Thermal
                    Management techniques takes the heat away from cells for
                    performance, reliability and safety.
                  </p>
                  <p className="vivid-points">
                    <ul>
                      <li className="mt-1">
                        {" "}
                        MODULAR & SCALABLE Technology
                        <p className="mb-0"> Energy : 1.8kwh - 4.1kwh</p>
                        <p className="mb-0"> Voltage : 50.4V - 57.6V</p>
                      </li>
                      <li className="mt-1">Recharge 3.0x FASTER</li>
                      <li className="mt-1">
                        3.0x more Durable and impact resistance
                      </li>
                      <li className="mt-1">IOT Enabled</li>
                      <li className="mt-1">Warranty* : 5yrs / 1,25,000 kms</li>
                      <li className="mt-1">
                        Perfect for Heavy Use , long daily commutes, and abusive
                        environments
                      </li>
                      <li className="mt-1">
                        Relatively ZERO down time for Last Mile logistics and
                        ride sharing companies
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="vigor-sec">
              <h1 className="vigor ">VIGOR</h1>
              <h3 className="best mt-3">BEST IN CLASS PERFORMANCE</h3>
              <h5 className="you mt-3">
                YOU NEED <span className="vig">VIGOR</span> FOR ON-THE-GO-ENERGY
              </h5>
              <div className="row justify-content-start">
                <div className="col-6 mt-5">
                  <img src={Vigor} alt="vigor" className="vig-img mt-5"></img>
                </div>
                <div className="col-6">
                  <p className="vigor-para mt-5">
                    The VIGOR is a breakthrough in ENERGY needs for a
                    Light-Electric Vehicle. This HIGHLY EFFICIENT battery pack
                    is best in class in weight, performance, reliability and
                    safety. This rechargeable battery pack is capable of FAST
                    CHARGING(1 hour) with out sacrificing the life. Our
                    Innovative and proprietary packing methods sets new
                    standards in POWER and ENERGY delivery.
                  </p>
                  <p className="vigor-points">
                    <ul>
                      <li className="mt-1">
                        {" "}
                        Configurable and scalable to user needs
                        <p className="mb-0">Energy: 1.4kwh - 2.3kwh</p>
                        <p className="mb-0">Voltage: 46.8V - 57.6V nominal</p>
                      </li>
                      <li className="mt-1">
                        Delivers 1.5x more power within the same class of weight
                        and capacity
                      </li>
                      <li className="mt-1">
                        Industrial grade soft over molding provides impact
                        protection
                      </li>
                      <li className="mt-1">
                        User Configurable Handle Design for multiple carrying
                        and lifting positions
                      </li>
                      <li className="mt-1">IOT Enabled</li>
                      <li className="mt-1">Warranty*:3yrs / 65,000 kms</li>
                      <li className="mt-1">
                        Perfect for everyday short distance commuters
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className="vivid-sec ">
              <h1 className="vivid ">VIVID</h1>
              <h3 className="ultra mt-3">ULTRA FAST CHARGING & LIFE</h3>
              <h5 className="you1 mt-3">
                YOU NEED <span className="vid">VIVID</span> FOR PRODUCTIVITY &
                NO DOWN TIME
              </h5>
              <div className="row justify-content-start">
                <div className="col-6">
                  <p className="vivid-para mt-5">
                    The VIVID is best in the WORLD battery pack for light
                    electric vehicles. VIVID brings the best in both world of
                    ENERGY and POWER. Our Innovative and proprietary Thermal
                    Management techniques takes the heat away from cells for
                    performance, reliability and safety.
                  </p>
                  <p className="vivid-points">
                    <ul>
                      <li className="mt-1">
                        {" "}
                        MODULAR & SCALABLE Technology
                        <p className="mb-0"> Energy : 1.8kwh - 4.1kwh</p>
                        <p className="mb-0"> Voltage : 50.4V - 57.6V</p>
                      </li>
                      <li className="mt-1">Recharge 3.0x FASTER</li>
                      <li className="mt-1">
                        3.0x more Durable and impact resistance
                      </li>
                      <li className="mt-1">IOT Enabled</li>
                      <li className="mt-1">Warranty* : 5yrs / 1,25,000 kms</li>
                      <li className="mt-1">
                        Perfect for Heavy Use , long daily commutes, and abusive
                        environments
                      </li>
                      <li className="mt-1">
                        Relatively ZERO down time for Last Mile logistics and
                        ride sharing companies
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="col-6 mt-5">
                  <img src={Vivid} alt="vivid" className="vid-img mt-5"></img>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Contact />
    </>
  );
}

export default Product;
