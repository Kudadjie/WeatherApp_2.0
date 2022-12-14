import "./App.scss";
import Panel from "./components/interface/Panel";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
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
