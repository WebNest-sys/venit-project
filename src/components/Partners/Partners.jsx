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
import anz from "../../assets/anz.jpg";
import westpac from "../../assets/venit_westpac.jpg";
import mag from "../../assets/venit_mag.jpg";
import qan from  "../../assets/venit_qan.jpg";
import rio from "../../assets/venit_rio.jpg";
import bhp from "../../assets/venit_bhp.jpg";
import boral from "../../assets/venit_boral.jpg";
import tHealth from "../../assets/venit_thealth.jpg";
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
          <img src={chelsio} alt="" />
        </div>
        <div>
          <img src={fastenal} alt="" />
        </div>
        <div>
          <img src={happiestminds} alt="" />
        </div>
        <div>
          <img src={manthansystems} alt="" />
        </div>
        <div>
          <img src={mindtree} alt="" />
        </div>
        <div>
          <img src={justdial} alt="" />
        </div>
        <div>
          <img src={lumen} alt="" />
        </div>
        <div>
          <img src={anz} alt="" />
        </div>
        <div>
          <img src={westpac} alt="" />
        </div>
        <div>
          <img src={mag} alt="" />
        </div>
        <div>
          <img src={qan} alt="" />
        </div>
        <div>
          <img src={rio} alt="" />
        </div>
        <div>
          <img src={bhp} alt="" />
        </div>
        <div>
          <img src={boral} alt="" />
        </div>
        <div>
          <img src={tHealth} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
