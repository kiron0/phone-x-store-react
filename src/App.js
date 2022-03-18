import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Phones from './components/Phones/Phones';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Input></Input>
      <Phones></Phones>
      <Footer></Footer>
    </div>
  );
}

export default App;
