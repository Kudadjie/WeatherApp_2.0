import locationPin from "../../assets/images/icons/location.svg";
import dayIcon from "../../assets/images/icons/dayNight/sun.png";

import nightIcon from "../../assets/images/icons/dayNight/moon.png";

import "./scss/InfoSectionBrief.scss";
import { useDispatch, useSelector } from "react-redux";
import { setTempUnit } from "../../store/slices/temperature";
import getWeatherData from "../../thunks/getWeatherData";
import { toggleModal } from "../../store/slices/changeLocationModal";
export default function InfoSectionBrief() {
  const ctx = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  function changeLocationHandler() {
    dispatch(toggleModal());
  }

  function reloadHandler() {
    dispatch(getWeatherData());
  }
  function changeTempUnitsHandler() {
    dispatch(
      setTempUnit({
        value:
          ctx.temperature.defaultUnit === "Celsius" ? "Fahrenheit" : "Celsius",
      })
    );
  }

  return (
    <section>
      <div className="infoSectionBriefUpper">
        <div>
          <h4 className="infoSectionBriefUpper__location">
            {ctx.currentWeather.location}
          </h4>
          <button
            className="infoSectionBriefUpper__lastUpdated"
            onClick={reloadHandler}
          >
            last updated {ctx.lastUpdated.value}
            <i className="fa-solid fa-arrow-rotate-right"></i>
          </button>
          <br />
          <button
            className="infoSectionBriefUpper__changeLocation"
            onClick={changeLocationHandler}
          >
            <img
              src={locationPin}
              width="25"
              style={{ marginRight: "8px" }}
              alt="#"
            />
            change location
          </button>
          <button
            className="infoSectionBriefUpper__changeUnit"
            onClick={changeTempUnitsHandler}
          >
            Change Units to{" "}
            {ctx.temperature.defaultUnit === "Celsius"
              ? "Fahrenheit"
              : "Celsius"}
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
            {ctx.temperature.defaultUnit === "Celsius"
              ? ctx.temperature.c
              : ctx.temperature.f}
          </h1>
          <div className="infoSectionBriefLower__temperatureUnit">
            <h5>o</h5>
            <h4>{ctx.temperature.defaultUnit === "Celsius" ? "c" : "f"}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
