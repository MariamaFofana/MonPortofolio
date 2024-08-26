import './App.css';
import { Route, Routes } from "react-router-dom"

/*------------Page d'accueil----------------*/
import Home from './PrincipalPage/Home.jsx';
import Contact from './Componoments/Contact/Contact.jsx';
import Projets from './Componoments/Projets/Projets.jsx';
import About from './Componoments/About/About.jsx';
import CVitae from './Componoments/CVitae/CVitae.jsx';
import Navbar from './Componoments/Navbar/Navbar.jsx';

function App() {
  return (        
      <Routes>
    {/*------------Route principal----------------*/}
      <Route path="/" element={<Home/>} />
      {/*toutes les autres routes   */}
      {/*------------Routage Authentification----------------*/}
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Contact" element={< Contact/>} />
     <Route path="/Projets" element={< Projets/>} />
      <Route path="/About" element={< About/>} />
      
      <Route path="/CVitae" element={< CVitae/>} />    

      </Routes>
  );
}

export default App;