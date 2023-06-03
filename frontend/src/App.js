import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Details from './components/Details';
import Cars from './components/Cars';
function App() {
  return (
    <div className=''>
<Router>
<Navbar/>

  <Routes>
<Route path='/' element = {<Home/>}/>
<Route path='/about' element = {<About/>}/>
<Route path='/contact' element = {<Contact/>}/>
<Route path='/cars' element = {<Cars/>}/>
<Route exact path='/item/:itemId' element={<Details  />} />

  </Routes>
  <Footer/>
</Router>
 
   
   </div>
  );
}

export default App;
