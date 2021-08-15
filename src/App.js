import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/Button';
import Navbar from './Components/Navbar';
import portfolio from './img/vivek.jpg'
import img from './img/dev.jpg'
import { Hero } from './Components/Hero';



const App = () => {
  return (
    <div className="App">
      <NavbarComp/>
      <h1 className="btn-info">Hello, My name is Vivek Khambra</h1>
      <p>I am a ICT graduate and Looking for the opportunity as a Front-end Developer</p>
      <img src={portfolio} alt="" />
      <img src={img} alt="" />
    </div>
  );
}

export default App;
