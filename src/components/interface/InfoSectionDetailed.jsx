import "./scss/InfoSectionDetailed.scss";
import windIcon from "../../assets/images/wind.svg";
import humidityIcon from "../../assets/images/humidity.svg";
//import all images and choose based on state.

export default function InfoSectionDetailed() {
  return (
    <div className="infoSectionDetailed">
      {/*render actual heading */}
      <h2 className="infoSectionDetailed__heading">Heading</h2>
      <div className="infoSectionDetailed__details">
        <div>
          {/*render details */}
          <p>Chance of rain :</p>
          <p>Sunrise | Sunset : </p>
          <p> Moonrise | Moonset : </p>
        </div>
        <div>
          {/* render details*/}
          <p className="text-spacing values-section">
            <i className="fa-solid fa-droplet icons-breathe"></i> Precipitation:{" "}
            {"--"}
          </p>
          <p className="text-spacing values-section">
            <span>
              <img alt="#" src={windIcon} width="25" />
            </span>{" "}
            Wind: {"--"}
          </p>
          <p className="text-spacing values-section">
            <span>
              <img alt="#" src={humidityIcon} width="25" />
            </span>{" "}
            Humidity: {"--"}
          </p>
        </div>
      </div>
    </div>
  );
}
