import weatherAPILogo from "../../assets/images/weatherapi_logo.png";

import "./scss/Footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer footer__attribution">
        Powered by
        <img
          src={weatherAPILogo}
          alt="Weather Now Attribution - Weather data by WeatherAPI.com"
        />
      </p>
    </footer>
  );
}
