import { useDispatch } from "react-redux";
import "./scss/ChangeLocationModal.scss";
import { toggleModal } from "../../store/slices/changeLocationModal";
import getWeatherData from "../../thunks/getWeatherData";
import { useRef } from "react";
export default function ChangeLocationModal() {
  const dispatch = useDispatch();
  const searchInputRef = useRef();
  function closeModalHandler(event) {
    event.preventDefault();
    dispatch(toggleModal());
  }

  function searchHandler(event) {
    event.preventDefault();
    const enteredLocation = searchInputRef.current.value;
    dispatch(getWeatherData(enteredLocation));
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

        <input type="text" ref={searchInputRef} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
