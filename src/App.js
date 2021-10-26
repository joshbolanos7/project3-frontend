import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Carousels from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <Main /> 
      <Carousels />
      <Footer />
    </div>
  );
}

export default App;
