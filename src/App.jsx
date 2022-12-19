import "./App.scss";
import { useEffect } from "react";
import Panel from "./components/interface/Panel";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { useDispatch } from "react-redux";
import getWeatherData from "./thunks/getWeatherData";

function App() {
  useEffect(() => {
    dispatch(getWeatherData());
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <main>
        <Panel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
