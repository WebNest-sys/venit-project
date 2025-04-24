import React from "react";
import Marquee from "react-fast-marquee";
import "./Partners.css";
import gemalto from "../../assets/gemalto.jpg";
import cadence from "../../assets/cadence.jpg";
import centurylink from "../../assets/centurylink.jpg";
import chelsio from "../../assets/chelsio.jpg";
import fastenal from "../../assets/fastenal.jpg";
import happiestminds from "../../assets/happiestminds.jpg";
import manthansystems from "../../assets/manthansystems.jpg";
import mindtree from "../../assets/mindtree.jpg";
import justdial from "../../assets/justdial.jpg";
import lumen from "../../assets/lumen.jpg";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const Partners = () => {
  return (
    <div className="partners">
      <Marquee pauseOnHover speed={200}>
        <div>
          <img src={gemalto} alt="" />
        </div>
        <div>
          <img src={cadence} alt="" />
        </div>
        <div>
          <img src={centurylink} alt="" />
        </div>
        <div>
          <img src={chelsio} alt="" />
        </div>
        <div>
          <img src={fastenal} alt="" />
        </div>
        <div>
          <img src={happiestminds} alt="" />
        </div>
        <div>
          <img width="100" src={manthansystems} alt="" />
        </div>
        <div>
          <img src={mindtree} alt="" />
        </div>
        <div>
          <img src={justdial} alt="" />
        </div>
        <div>
          <img width="100" src={lumen} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
