import React from "react";
import "./Ourpartners.css";
import gemalto from "../../assets/gemalto.jpg";
import cadence from "../../assets/cadence.jpg";
import centurylink from "../../assets/centurylink.jpg";
import chelsio from "../../assets/chelsio.jpg";
import fastenal from "../../assets/fastenal.jpg";
import happiestminds from "../../assets/happiestminds.jpg";
import manthansystems from "../../assets/manthansystems.jpg";
import mindtree from "../../assets/mindtree.jpg";
import justdial from "../../assets/justdial.jpg";

function Ourpartners() {
  return (
    <div>
      <div className="photoGallery">
        <div className="column">
          <div className="photo">
            <img src={gemalto} alt="" />
          </div>
          <div className="photo">
            <img src={cadence} alt="" />
          </div>
          <div className="photo">
            <img src={centurylink} alt="" />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img src={chelsio} alt="" />
          </div>
          <div className="photo">
            <img src={fastenal} alt="" />
          </div>
          <div className="photo">
            <img src={happiestminds} alt="" />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img src={manthansystems} alt="" />
          </div>
          <div className="photo">
            <img src={mindtree} alt="" />
          </div>
          <div className="photo">
            <img src={justdial} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourpartners;
