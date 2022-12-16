import "./scss/InfoSectionDetailed.scss";
import windIcon from "../../assets/images/wind.svg";
import humidityIcon from "../../assets/images/humidity.svg";
//import all images and choose based on state.

export default function InfoSectionDetailed() {
  const [chanceOfRain, sunRiseSet, moonRiseSet, precipitation, wind, humidity] =
    [0, 0, 0, 0, 0, 0];
  return (
    <div className="infoSectionDetailed">
      {/*render actual heading */}
      <h2 className="infoSectionDetailed__heading">Heading</h2>
      <div className="infoSectionDetailed__details">
        <div>
          {/*render details */}
          <p>
            Chance of rain: <br /> {chanceOfRain}
          </p>
          <p>
            Sunrise | Sunset: <br /> {sunRiseSet}
          </p>
          <p>
            {" "}
            Moonrise | Moonset: <br /> {moonRiseSet}
          </p>
        </div>
        <div>
          {/* render details*/}
          <p className="text-spacing values-section">
            <i className="fa-solid fa-droplet icons-breathe"></i> Precipitation:{" "}
            <br />
            {precipitation}
          </p>
          <p className="text-spacing values-section">
            <span>
              <img alt="#" src={windIcon} width="25" />
            </span>{" "}
            Wind: <br />
            {wind}
          </p>
          <p className="text-spacing values-section">
            <span>
              <img alt="#" src={humidityIcon} width="25" />
            </span>{" "}
            Humidity: <br />
            {humidity}
          </p>
        </div>
      </div>
    </div>
  );
}
