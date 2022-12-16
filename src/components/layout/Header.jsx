import logo from "../../assets/images/weatherNowLogo.svg";
export default function Header() {
  return (
    <header>
      <img
        src={logo}
        style={{ margin: "0 0 10px 30px" }}
        alt="Weather Now Logo"
        width="20%"
      />
    </header>
  );
}
