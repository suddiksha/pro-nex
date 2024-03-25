import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel"; 
import "../../assests/css/land.css";
import B1 from "../b1";
import B2 from "../b2";
import Button from "@mui/material/Button";

function Land() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="land-page" style={{ backgroundColor: "white" }}>
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect} 
        controls={false} 
        indicators={false}
        interval={3000}
      >
        <Carousel.Item style={{ backgroundColor: "white" }}>
          <div className="row justify-content-start"  >
            <div className="col-6">
              <div className="ms-5">
                <h1 className="best text-start">BEST IN CLASS PERFORMANCE</h1>
                <p className="lithium mt-2 text-start">Lithium-Ion Battery</p>
                <p className="lithium-sub text-start ">
                  The VIGOR is a breakthrough in ENERGY needs for a Light-Electric
                  Vehicle.
                </p>
                <Button variant="contained" className="learn">
                  LEARN MORE
                </Button>
              </div>
            </div>
            <div className="col-5 b1">
              <B2/>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: "white" }}>
          <div className="row justify-content-start">
            <div className="col-6">
              <div className="ms-5">
                <h1 className="best text-start">ULTRA FAST CHARGING  & LIFE</h1>
                <p className="lithium mt-2 text-start">Highly Efficient, Long Life & Safety</p>
                <p className="lithium-sub text-start ">
                The VIVID is best in the WORLD battery pack for light electric vehicles. 
                </p>
                <Button variant="contained" className="learn">
                  LEARN MORE
                </Button>
              </div>
            </div>
            <div className="col-6 b1">
              <B1/>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Land;
