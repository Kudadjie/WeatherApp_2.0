import "./App.scss";
import { useEffect } from "react";
import Panel from "./components/interface/Panel";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import getWeatherData from "./thunks/getWeatherData";
import LoadingScreen from "./components/interface/LoadingScreen";
import ChangeLocationModal from "./components/interface/ChangeLocationModal";

function App() {
  useEffect(() => {
    dispatch(getWeatherData());
  }, []);
  const dispatch = useDispatch();
  const ctx = useSelector((state) => {
    return state;
  });

  const displayContent = (
    <div className="appRoot">
      <Header />
      <main>
        <Panel />
      </main>
      <Footer />
    </div>
  );

  return (
    <div className="App">
      <ChangeLocationModal />
      {ctx.lastUpdated.value === "just now" ? (
        displayContent
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default App;
