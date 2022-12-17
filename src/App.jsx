// import { useEffect } from "react";
import "./App.scss";
import Panel from "./components/interface/Panel";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  // useEffect(() => {
  //   fetch(
  //     "https://api.weatherapi.com/v1/forecast.json?key=c1cc53b5ba214351bc9232844221703&q=5.6426496,-0.2260992&days=1&aqi=no&alerts=no"
  //   ).then((res) => console.log(res.json()));
  // }, []);
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
