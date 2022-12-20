import "./scss/ChangeLocationModal.scss";
export default function ChangeLocationModal() {
  return (
    <div className="modal">
      <form className="changeLocationForm">
        <button className="changeLocationForm__close-btn">X close</button>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
