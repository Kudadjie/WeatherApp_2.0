import InfoSectionBrief from "./InfoSectionBrief";
import InfoSectionDetailed from "./InfoSectionDetailed";
import "./scss/Panel.scss";
export default function Panel() {
  return (
    <div className="panel">
      <InfoSectionBrief />
      <InfoSectionDetailed />
    </div>
  );
}
