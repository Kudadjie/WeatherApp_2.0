import InfoSectionBrief from "./InfoSectionBrief";
import InfoSectionDetailed from "./InfoSectionDetailed";
import "./scss/Panel.scss";
import { determineImage } from "../../lib/utils";
import { useSelector } from "react-redux";

export default function Panel() {
  const ctx = useSelector((state) => {
    return {
      condition: state.currentWeather.condition,
      isDay: state.isDay.value,
    };
  });
  return (
    <div
      className="panel"
      //Refactor to take from context
      style={{
        backgroundImage: `url(${determineImage(ctx.condition, ctx.isDay)})`,
      }}
    >
      <InfoSectionBrief />
      <InfoSectionDetailed />
    </div>
  );
}
