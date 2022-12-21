import "./scss/ChangeLocationModal.scss";
export default function ChangeLocationModal() {
  function closeModalHandler(event) {
    event.preventDefault();
  }

  function searchHandler(event) {
    event.preventDefault();
  }
  return (
    <div className="modal">
      <form className="changeLocationForm" onSubmit={searchHandler}>
        <div>
          <button
            className="changeLocationForm__close-btn"
            style={{ width: "fit-content" }}
            onClick={closeModalHandler}
          >
            X close
          </button>
        </div>

        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
