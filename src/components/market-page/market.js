import "../../assests/css/market.css";
import Nav from "../navbar/nav";
import { useMediaQuery } from "react-responsive";

import Mar1 from "../../assests/img/mar1.png";
import Mar2 from "../../assests/img/mar2.png";
import Mar3 from "../../assests/img/mar3.png";
import Contact from "../contact-us/contact";

function Market() {
  const isMarket = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <div className="market-page ">
        {isMarket ? (
          <div className="market-phone">
 <div className="light-sec">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h1 className="mar mt-3 text-center">LIGHT ELECTRIC VEHICLES</h1>
                  <img src={Mar1} alt="market" className="light-img mt-5"></img>

                  <p className="mar-para mb-0 ">
                    Light Electric vehicles are the primary mode of
                    transportation in densely populated areas across all
                    continents. Globally, Over 100 million 2-wheelers and
                    3-wheelers are on streets everyday covering over 300 million
                    kilometers each day which is equivalent to a Round trip from
                    Earth to Sun. Reducing carbon emissions from these vehicles
                    is a challenge NexiGO energy has taken up. NexiGO’s
                    technology is the key contributor to achieve global
                    electrification faster. Our Innovative designs brings
                    reliability, faster charge times, and safety to the energy
                    source for the vehicles.
                  </p>
                </div>
                
              </div>
            </div>



            
            <div className="industrial-sec">
              <div className="row justify-content-center">
                
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  <h1 className="mar mt-3 text-center">INDUSTRIAL VEHICLES</h1>
                  <img src={Mar2} alt="market" className="indus-img"></img>

                  <p className="mar-para mb-0 pt-5">
                    Industrial vehicles serve a crucial role in increasing
                    efficiency of any manufacturing and logistics plants. In a
                    Large manufacturing facilities, each forklifts and tow
                    motors travel several tens of miles a day. The energy source
                    to these vehicles need to be reliable, safe, and long
                    lasting. ZERO DOWNTIME is a key requirement for these
                    vehicles as they can disrupt the manufacturing and logistics
                    flow in a large facility which downstream to loss of money.
                    NEXIGO’s developed an Ultra-Fast charging, high life, and
                    safe battery packs to significantly reduce the down time.
                  </p>
                </div>
              </div>
            </div>











            <div className="energy-sec">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h1 className="mar mt-3 text-center">ENERGY STORAGE</h1>
                  <img src={Mar3} alt="market" className="energy-img mt-5"></img>

                  <p className="mar-para mb-0 pt-5">
                    Efficiently storing energy from renewable sources is a key
                    step in achieving NET ZERO carbon footprint. The growing
                    dependency on the grid for Electric vehicle charging and
                    modern industrialization is making it more susceptible for
                    breaking and unreliable. Grid stabilization and local energy
                    backup is the need of the hour, as it eliminated the need
                    for upgrading the entire infrastructure. A reliable, long
                    lasting, flexible and modular energy source is the dominant
                    factor in achieving this Goal. NexiGO’s has developed a
                    battery pack solution that specifically meet the needs of
                    energy storage market that is 10 x Safe, 10 x long life and
                    maintenance free.
                  </p>
                </div>
                
              </div>
            </div>







          </div>
        ) : (
          <>
            <div className="light-sec">
              <div className="row justify-content-center">
                <div className="col-5">
                  <h1 className="mar mt-3">LIGHT ELECTRIC VEHICLES</h1>
                  <p className="mar-para mb-0 pt-2">
                    Light Electric vehicles are the primary mode of
                    transportation in densely populated areas across all
                    continents. Globally, Over 100 million 2-wheelers and
                    3-wheelers are on streets everyday covering over 300 million
                    kilometers each day which is equivalent to a Round trip from
                    Earth to Sun. Reducing carbon emissions from these vehicles
                    is a challenge NexiGO energy has taken up. NexiGO’s
                    technology is the key contributor to achieve global
                    electrification faster. Our Innovative designs brings
                    reliability, faster charge times, and safety to the energy
                    source for the vehicles.
                  </p>
                </div>
                <div className="col-2"></div>
                <div className="col-5">
                  <img src={Mar1} alt="market" className="light-img"></img>
                </div>
              </div>
            </div>

            <div className="industrial-sec">
              <div className="row justify-content-center">
                <div className="col-4">
                  <img src={Mar2} alt="market" className="indus-img"></img>
                </div>
                <div className="col-2"></div>
                <div className="col-5 ">
                  <h1 className="mar mt-3 ">INDUSTRIAL VEHICLES</h1>

                  <p className="mar-para mb-0 pt-2">
                    Industrial vehicles serve a crucial role in increasing
                    efficiency of any manufacturing and logistics plants. In a
                    Large manufacturing facilities, each forklifts and tow
                    motors travel several tens of miles a day. The energy source
                    to these vehicles need to be reliable, safe, and long
                    lasting. ZERO DOWNTIME is a key requirement for these
                    vehicles as they can disrupt the manufacturing and logistics
                    flow in a large facility which downstream to loss of money.
                    NEXIGO’s developed an Ultra-Fast charging, high life, and
                    safe battery packs to significantly reduce the down time.
                  </p>
                </div>
              </div>
            </div>

            <div className="energy-sec">
              <div className="row justify-content-center">
                <div className="col-5 mt-4">
                  <h1 className="mar mt-2">ENERGY STORAGE</h1>
                  <p className="mar-para mb-0 pt-2">
                    Efficiently storing energy from renewable sources is a key
                    step in achieving NET ZERO carbon footprint. The growing
                    dependency on the grid for Electric vehicle charging and
                    modern industrialization is making it more susceptible for
                    breaking and unreliable. Grid stabilization and local energy
                    backup is the need of the hour, as it eliminated the need
                    for upgrading the entire infrastructure. A reliable, long
                    lasting, flexible and modular energy source is the dominant
                    factor in achieving this Goal. NexiGO’s has developed a
                    battery pack solution that specifically meet the needs of
                    energy storage market that is 10 x Safe, 10 x long life and
                    maintenance free.
                  </p>
                </div>
                <div className="col-2"></div>
                <div className="col-5">
                  <img src={Mar3} alt="market" className="energy-img"></img>
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

export default Market;
