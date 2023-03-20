import "./scss/Header.scss";

import logo from "../../assets/images/weatherNowLogo.svg";
export default function Header() {
  return (
    <header>
      <img src={logo} alt="Weather Now Logo" />
    </header>
  );
}
