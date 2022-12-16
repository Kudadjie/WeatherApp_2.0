import locationPin from "../../assets/images/icons/location.svg";
import dayIcon from "../../assets/images/icons/dayNight/sun.png";

import nightIcon from "../../assets/images/icons/dayNight/moon.png";

import "./scss/InfoSectionBrief.scss";
export default function InfoSectionBrief() {
  const [location, updated, unit, temp, day, unitUsed] = [
    "default",
    "default",
    "default",
    23,
    true,
    "C",
  ];

  let Icon;
  if (day) {
    Icon = (
      <img
        src={dayIcon}
        alt="#"
        width="30"
        height="30"
        style={{ marginTop: "10px" }}
      />
    );
  } else {
    Icon = (
      <img
        src={nightIcon}
        alt="#"
        width="30"
        height="30"
        style={{ marginTop: "10px" }}
      />
    );
  }

  return (
    <section>
      <div className="infoSectionBriefUpper">
        <div>
          <h4 className="infoSectionBriefUpper__location">{location}</h4>
          <button className="infoSectionBriefUpper__lastUpdated">
            {/* //render with time */}
            last updated {updated}
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
          {/* Change based on state */}
          <button className="infoSectionBriefUpper__changeUnit">
            Change Units to {unit}
          </button>
        </div>
        {Icon}
        {/* Conditionally render */}
        {/* <img src={nightIcon} alt="#" width="40" height="40" /> */}
      </div>
      {/* Only for mobile */}
      <div className="infoSectionBriefLower">
        <div className="infoSectionBriefLower__temperature">
          <h1>{temp}</h1>
          <div className="infoSectionBriefLower__temperatureUnit">
            <h5>o</h5>
            <h4>{unitUsed}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
