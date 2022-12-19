import locationPin from "../../assets/images/icons/location.svg";
import dayIcon from "../../assets/images/icons/dayNight/sun.png";

import nightIcon from "../../assets/images/icons/dayNight/moon.png";

import "./scss/InfoSectionBrief.scss";
import { useSelector } from "react-redux";
export default function InfoSectionBrief() {
  const ctx = useSelector((state) => {
    return state;
  });

  return (
    <section>
      <div className="infoSectionBriefUpper">
        <div>
          <h4 className="infoSectionBriefUpper__location">
            {ctx.currentWeather.location}
          </h4>
          <button className="infoSectionBriefUpper__lastUpdated">
            last updated {ctx.lastUpdated.value}
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
          </button>
          <button className="infoSectionBriefUpper__changeUnit">
            Change Units to{" "}
            {ctx.temperature.defaultUnit === "celsius"
              ? "fahrenheit"
              : "celsius"}
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
      <div className="infoSectionBriefLower">
        <div className="infoSectionBriefLower__temperature">
          <h1>
            {ctx.temperature.defaultUnit === "celsius"
              ? ctx.temperature.c
              : ctx.temperature.f}
          </h1>
          <div className="infoSectionBriefLower__temperatureUnit">
            <h5>o</h5>
            <h4>{ctx.temperature.defaultUnit === "celsius" ? "c" : "f"}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
