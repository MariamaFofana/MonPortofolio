import './App.css';
import { Route, Routes } from "react-router-dom";

/*------------Composants globaux----------------*/
import Navbar from '../src/Components/Navbar/Navbar';
import Footer from '../src/Components/Footer/Footer'; /* Ajout du Footer ici */

/*------------Pages et Sections----------------*/
import Home from './PrincipalPage/Home.jsx';
import Contact from '../src/Components/Contact/Contact.jsx';
import About from '../src/Components/About/About.jsx';
import CVitae from '../src/Components/CVitae/CVitae.jsx';
import Projets from '../src/Components/Projets/Projets.jsx';
import Loisirs from '../src/Components/Loisirs/loisir.jsx';
function App() {
  return (        
      <>
        {/* En haut : visible partout */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projets" element={<Projets />} />
          <Route path="/About" element={<About />} />
          <Route path="/CVitae" element={<CVitae />} />
          <Route path="/Loisirs" element={<Loisirs />} />
        </Routes>

        {/* En bas : visible partout */}
        <Footer />
      </>
  );
}

export default App;