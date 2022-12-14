import InfoSectionBrief from "./InfoSectionBrief";
import InfoSectionDetailed from "./InfoSectionDetailed";
export default function Panel() {
  return (
    <div className="panel" style={{ backgroundColor: "blue" }}>
      <InfoSectionBrief />
      <InfoSectionDetailed />
    </div>
  );
}
