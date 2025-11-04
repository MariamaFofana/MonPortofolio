import './App.css';
import { Route, Routes } from "react-router-dom"

/*------------Page d'accueil----------------*/
import Home from './PrincipalPage/Home.jsx';

import Navbar from '../src/Components/Navbar/Navbar';
import Contact from '../src/Components/Contact/Contact.jsx';
import About from '../src/Components/About/About.jsx';
import CVitae from '../src/Components/CVitae/CVitae.jsx';
import Projets from '../src/Components/Projets/Projets.jsx';

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