import "./scss/InfoSectionDetailed.scss";
import windIcon from "../../assets/images/wind.svg";
import humidityIcon from "../../assets/images/humidity.svg";
import { useSelector } from "react-redux";

export default function InfoSectionDetailed() {
  const ctx = useSelector((state) => {
    return {
      precipitation: `${state.currentWeather.precipitation} in`,
      wind: `${state.currentWeather.wind} mph`,
      humidity: `${state.currentWeather.humidity} %`,
      chanceOfRain: `${state.currentWeather.chanceOfRain} %`,
      moonRiseSet: state.riseSetValues.moon,
      sunRiseSet: state.riseSetValues.sun,
    };
  });

  return (
    <div className="infoSectionDetailed">
      <h2 className="infoSectionDetailed__heading">Heading</h2>
      <div className="infoSectionDetailed__details">
        <div>
          <p>
            Chance of rain: <br /> {ctx.chanceOfRain}
          </p>
          <p>
            Sunrise | Sunset: <br /> {ctx.sunRiseSet}
          </p>
          <p>
            {" "}
            Moonrise | Moonset: <br /> {ctx.moonRiseSet}
          </p>
        </div>
        <div>
          <p>
            <i className="fa-solid fa-droplet icons-breathe"></i> Precipitation:{" "}
            <br />
            {ctx.precipitation}
          </p>
          <p>
            <span>
              <img alt="#" src={windIcon} width="25" />
            </span>{" "}
            Wind: <br />
            {ctx.wind}
          </p>
          <p>
            <span>
              <img alt="#" src={humidityIcon} width="25" />
            </span>{" "}
            Humidity: <br />
            {ctx.humidity}
          </p>
        </div>
      </div>
    </div>
  );
}
