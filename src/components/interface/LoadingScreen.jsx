import loadingSpinner from "../../assets/images/icons/spinner.svg";
import "./scss/LoadingScreen.scss";
export default function LoadingScreen() {
  return (
    //TODO - Fix unnecessary extra width and height
    <div className="loadingScreen">
      <img src={loadingSpinner} alt="#" width="25%" />
      <p>Allow lcoation access to use Weather Now</p>
    </div>
  );
}
