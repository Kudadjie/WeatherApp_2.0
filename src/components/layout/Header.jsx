import logo from "../../assets/images/weatherNowLogo.svg";
export default function Header() {
  return (
    <header>
      <img src={logo} style={{ margin: "0 0 0 30px" }} alt="Weather Now Logo" />
    </header>
  );
}
