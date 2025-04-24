import React from "react";
import "./AddressDetailsBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope, 
  faPhone, 
  faAddressCard,
  faX,
} from "@fortawesome/free-solid-svg-icons";

// const DetailsBarWrapper = styled.div`
//   background-color: rgb(8, 8, 63);
//   border-radius: 7px;
//   position: relative;
//   padding: 30px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: auto;
//   padding-bottom: 100px;
//   @media (max-width: 768px) {
//     padding-bottom: 80px;
//     grid-row: 2;
//   }
// `;

// const TextOne = styled.p`

// `;

// const TextTwo = styled.p`
//   text-align: center;
//   color: #fff;
//   font-size: 12px;
//   line-height: 18px;
// `;

// const BigCircle = styled.div`
//   height: 50px;
//   margin-top: 30px;
//   width: 50px;
//   background-color: rgb(100, 21, 173);
//   border-radius: 100%;
//   z-index: 22;
//   margin-left: 10px;
// `;

// const SmallCircle = styled.div`
//   position: absolute;
//   margin-left: 10px;
//   background-color: rgb(252, 113, 137);
//   border-radius: 100%;
//   height: 30px;
//   width: 30px;
// `;

// const ContactsWrapper = styled.a`

// `;

// const ContactText = styled.div`

// `;

// const SocialsWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   display: flex;
//   height: 10px;
//   justify-content: center;
//   bottom: 30px;
//   position: absolute;
//   cursor: pointer;
// `;

// const SocialIconWrapper = styled.a`
//   width: 35px;
//   height: 35px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   &:hover {
//     background-color: rgb(252, 113, 137);
//   }
// `;

const AddressDetailsBar = () => {
  return (
    <div class="detailsBarWrapper">
      <div class="textWrapper">
        <div class="textOne">VENIT Consulting</div>
      </div>

      <div>
        <div class="contactWrapper">
          <FontAwesomeIcon icon={faPhone} />
          <div class="contactText"> +91 9741440804</div>
        </div>

        <div class="contactWrapper">
          <FontAwesomeIcon icon={faEnvelope} />
          <div class="contactText"> bhargavi@venitconsulting.com</div>
        </div>

        <div class="contactWrapper">
          <FontAwesomeIcon icon={faAddressCard} />
          <div class="contactText">
            #459, 3rd floor, Kiran Towers, Service Rd,<br></br>
            Teacher's Colony, Santhosapuram,<br></br>
            1st Block Koramangala, Bengaluru,<br></br>
            Karnataka-560034 <br></br>
            India.
          </div>
        </div>

        <div class="contactWrapper">
        <div >
          <iframe width="350" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
           src="https://maps.google.com/maps?width=400&amp;height=300&amp;hl=en&amp;q=3rd%20floor,%20Kiran%20Towers,%20459,%20Service%20Rd,%20Teacher's%20Colony,%20Santhosapuram,%201st%20Block%20Koramangala,%20Koramangala,%20Bengaluru,%20Karnataka%20560034+(VENIT%20Consulting)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/personal-trackers/">Personal GPS</a>
           </iframe></div>
        </div>
      </div>
    </div>
  );
};

export default AddressDetailsBar;

//href="tel:+233543201893"
// href="mailto:aljay3334@gmail.com"
