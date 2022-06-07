import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Services from "./components/pages/Services/Services";
import Projects from "./components/pages/Projects/Projects";
import Safety from "./components/pages/Safety/Safety";
import Contact from "./components/pages/Contact/Contact";
import AdvLogo from "./imgs/AdvLogo";
import SafeWorkLogo from "./imgs/advance-crane-safework-mb.png";
import CorsLogo from "./imgs/advance-crane-COR-safety-certified-logo.png";
import IsnLogo from "./imgs/advance-crane-isn-certification.png";
import FacebookLogo from "./imgs/advance-crane-facebook.png";
/*import YoutubeLogo from "./imgs/advance-crane-youtube.png";*/
import InstagramLogo from "./imgs/advance-crane-instagram.png";
import Getyear from "./components/getyear";

class App extends Component {


    render(){return (
      <Router>
        <div id="header-container">
        <div id="myNav" className="overlay">

          <a href={void(0)} className="closebtn" onClick={closeNav}>&times;</a>

          <div className="overlay-content">
            <Link to="/" onClick={closeNav}><p className='mobile-menu-identity'><AdvLogo/>Advance Crane LTD</p></Link>
            <Link to="/" onClick={closeNav}>Home</Link>
            <Link to="/about" onClick={closeNav}>About</Link>
            <Link to="/services" onClick={closeNav}>Services</Link>
            <Link to="/projects" onClick={closeNav}>Projects</Link>
            <Link to="/safety" onClick={closeNav}>Safety</Link>
            <Link to="/contact" onClick={closeNav}>Contact</Link>
        </div>
        </div>
        <Link to="/" className='overlay-open'><p className='overlay-open mobile-site-identity'><AdvLogo/>Advance Crane LTD</p></Link>
        <div className='overlay-open' onClick={openNav}>
          <div className='resp-menu-lines'></div>
          <div className='resp-menu-lines'></div>
          <div className='resp-menu-lines'></div>
        </div>
        <nav id="header-nav" className="main-menu">
          <h1 id="site-identity"><Link to="/"><AdvLogo/>Advance Crane LTD</Link></h1>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/safety">Safety</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
          </nav>
        </div>
      <article className='main-page-content container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="safety" element={<Safety/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </article>
      <div id="footer-container">
      <div className='row'>
      <div className='col-lg-3 footer-certifications'>
        <img className='img-fluid' src={SafeWorkLogo} alt='Advance Crane LTD Safework Manitoba' title='Advance Crane LTD Safework Manitoba'/>
        <img className='img-fluid' src={CorsLogo} alt='Advance Crane LTD CORS Safety Certified' title='Advance Crane LTD CORS Safety Certified'/>
        <img className='img-fluid' src={IsnLogo} alt='Advance Crane LTD ISN Certified' title='Advance Crane LTD ISN Certified'/>
      </div>
      <nav id="footer-nav" className="col-lg-6 main-menu">
        <ul>
          <li>
            <Link to="/" onClick={scrollToTop}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={scrollToTop}>About</Link>
          </li>
          <li>
            <Link to="/services" onClick={scrollToTop}>Services</Link>
          </li>
          <li>
            <Link to="/projects" onClick={scrollToTop}>Projects</Link>
          </li>
          <li>
            <Link to="/safety" onClick={scrollToTop}>Safety</Link>
          </li>
          <li>
            <Link to="/contact" onClick={scrollToTop}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='footer-contact col-lg-3'>
        <div className='advance-crane-social-media'>
          <a href='https://www.facebook.com/pages/category/Industrial-Company/Advance-Crane-Ltd-117014062334207/' target="_blank" rel="noreferrer" title="Advance Crane LTD on Facebook"><img className='img-fluid' src={FacebookLogo} alt='Advance Crane LTD Facebook' title='Advance Crane LTD Facebook'/></a>
          {/*}<img className='img-fluid' src={YoutubeLogo} alt='Advance Crane LTD YouTube' title='Advance Crane LTD YouTube'/>*/}
          <a href='https://www.instagram.com/advancecraneltd/' target="_blank" rel="noreferrer" title="Advance Crane LTD on Instagram"><img className='img-fluid' src={InstagramLogo} alt='Advance Crane LTD Instagram' title='Advance Crane LTD Instagram'/></a>
        </div>
        <div className='address-and-contact'>
        <p>41c St Paul Blvd,</p>
        <p>West Saint Paul, MB</p>
        <p>R2P 2W5</p>
        <p><a href='tel:+12043393653' title='Call Advance Crane LTD'>(204) 339-3653</a></p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Button className='top-button' onClick={scrollToTop}>&#8679;TOP&#8679;</Button>
          <p className='copy-info'>&copy;{<Getyear/>}</p>
        </div>
      </div>
      </div>
      </div>
      </Router>
    )}
}

var navLocation = "Advance Crane LTD";


function setNavLocation (newLocation) {
  navLocation = newLocation;
  console.log('location is set to' + navLocation);
}
 
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  scrollToTop();
}

export default App;