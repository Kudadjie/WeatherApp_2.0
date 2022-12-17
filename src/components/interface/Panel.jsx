import InfoSectionBrief from "./InfoSectionBrief";
import InfoSectionDetailed from "./InfoSectionDetailed";
import "./scss/Panel.scss";
import { determineImage } from "../../lib/utils";

export default function Panel() {
  return (
    <div
      className="panel"
      //Refactor to take from context
      style={{ backgroundImage: `url(${determineImage("clear", "night")})` }}
    >
      <InfoSectionBrief />
      <InfoSectionDetailed />
    </div>
  );
}
