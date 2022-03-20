import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Phones from "./components/Phones/Phones";
import ShowAll from "./components/ShowAll/ShowAll";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Phones></Phones>
      <ShowAll></ShowAll>
      <Footer></Footer>
    </div>
  );
}

export default App;
