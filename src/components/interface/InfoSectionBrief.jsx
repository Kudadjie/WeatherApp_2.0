import locationPin from "../../assets/images/icons/location.svg";
import dayIcon from "../../assets/images/icons/dayNight/sun.png";
import weatherSVG from "../../assets/images/icons/weather/64x64/day/113.png";

// import nightIcon from "../../assets/images/icons/dayNight/moon.png";

import "./scss/InfoSectionBrief.scss";
export default function InfoSectionBrief() {
  return (
    <section>
      <div className="infoSectionBriefUpper">
        <div>
          <h4 className="infoSectionBriefUpper__location">location</h4>
          <button className="infoSectionBriefUpper__lastUpdated">
            {/* //render with time */}
            last updated just now
            <i className="fa-solid fa-arrow-rotate-right"></i>
          </button>
          <br />
          <button className="infoSectionBriefUpper__changeLocation">
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

      <div className="infoSectionBriefLower">
        {/* conditionally render based on state */}
        <img src={weatherSVG} alt="#" />
        <div className="infoSectionBriefLower__temperature">
          <h1>31</h1>
          <div className="infoSectionBriefLower__temperatureUnit">
            <h5>o</h5>
            <h4>C</h4>
          </div>
        </div>
        {/* button to change temp unit? */}
        {/* <button className="infoSectionBriefLower__changeUnitBtn">
          Change to Fahreit
        </button> */}
      </div>
    </section>
  );
}
