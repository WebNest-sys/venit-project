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
import lumen from "../../assets/lumen.jpg";
import anz from "../../assets/anz.jpg";
import rio from "../../assets/venit_rio.jpg";
import bhp from "../../assets/venit_bhp.jpg";
import westpac from "../../assets/venit_westpac.jpg";
import mag from "../../assets/venit_mag.jpg";
import qan from  "../../assets/venit_qan.jpg";
import boral from "../../assets/venit_boral.jpg";
import tHealth from "../../assets/venit_thealth.jpg";

function Ourpartners() {
  return (
    <div>
      <div className="photoGallery">
        <div className="column">
          <div className="photo">
            <img src={gemalto} alt="" />
          </div>
          <div className="photo">
            <img src={westpac} alt="" />
          </div>
          <div className="photo">
            <img src={cadence} alt="" />
          </div>
          <div className="photo" >
            <img src={happiestminds} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="photo">
            <img src={chelsio} alt="" />
          </div>
          <div className="photo">
            <img src={mag} alt="" />
          </div>
          <div className="photo">
            <img src={fastenal} alt="" />
          </div>
          <div className="photo">
            <img src={mindtree} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="photo">
            <img src={manthansystems} alt="" />
          </div>
          <div className="photo">
            <img src={qan} alt="" />
          </div>
          <div className="photo">
            <img src={justdial} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="photo">
            <img src={anz} alt="" />
          </div>
          <div className="photo">
            <img src={boral} alt="" />
          </div>
          <div className="photo">
            <img src={rio} alt="" />
          </div>
        </div>

        <div className="column">
          <div className="photo">
            <img src={tHealth} alt="" />
          </div>
          <div className="photo">
            <img src={bhp} alt="" />
          </div>
          <div className="photo">
            <img src={lumen} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourpartners;
