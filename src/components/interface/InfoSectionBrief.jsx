import locationPin from "../../assets/images/icons/location.svg";
import dayIcon from "../../assets/images/icons/dayNight/sun.png";

// import nightIcon from "../../assets/images/icons/dayNight/moon.png";

import "./scss/InfoSectionBrief.scss";
export default function InfoSectionBrief() {
  return (
    <div className="infoSectionBrief">
      <div>
        <h4 className="infoSectionBrief__location">location</h4>
        <button className="infoSectionBrief__lastUpdated">
          {/* //render with time */}
          last updated just now
          <i className="fa-solid fa-arrow-rotate-right"></i>
        </button>
        <br />
        <button className="infoSectionBrief__changeLocation">
          <img
            src={locationPin}
            width="25"
            style={{ marginRight: "8px" }}
            alt="#"
          />
          change location
          {/* <span className="span-block change-location">
            
          </span> */}
        </button>
      </div>

      <img
        src={dayIcon}
        alt="#"
        width="40"
        height="40"
        style={{ marginTop: "10px" }}
      />
      {/* Conditionally render */}
      {/* <img src={nightIcon} alt="#" width="40" height="40" /> */}
    </div>
  );
}
