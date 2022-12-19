import locationPin from "../../assets/images/icons/location.svg";
import dayIcon from "../../assets/images/icons/dayNight/sun.png";

import nightIcon from "../../assets/images/icons/dayNight/moon.png";

import "./scss/InfoSectionBrief.scss";
import { useSelector } from "react-redux";
export default function InfoSectionBrief() {
  const ctx = useSelector((state) => {
    return state;
  });

  const [location, updated, unit, temp] = [
    ctx.currentWeather.location,
    ctx.lastUpdated.value,
    ctx.temperature.defaultUnit,
    ctx.temperature.c,
  ];

  const unitToChangeTo =
    ctx.temperature.defaultUnit === "celsius" ? "fahrenheit" : "celsius";
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
            Change Units to {unitToChangeTo}
          </button>
        </div>
        <img
          src={ctx.isDay.value ? dayIcon : nightIcon}
          alt="#"
          width="30"
          height="30"
          style={{ marginTop: "10px" }}
        />
      </div>
      {/* Only for mobile */}
      <div className="infoSectionBriefLower">
        <div className="infoSectionBriefLower__temperature">
          <h1>{temp}</h1>
          <div className="infoSectionBriefLower__temperatureUnit">
            <h5>o</h5>
            <h4>{unit === "celsius" ? "c" : "f"}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
