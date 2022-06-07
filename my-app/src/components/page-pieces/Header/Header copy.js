import React from 'react';
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Services from "../../../components/pages/Services/Services";
import About from '../../pages/About/About';

export default function header() {
  return (
    <Router>
        <div id="header-container">
            <nav id="header-nav" class="main-menu">
                <p>Header Nav</p>
                <li>
                    <ul>Home</ul>
                    <ul>Services</ul>
                    <ul>Projects</ul>
                    <ul>Safety</ul>
                    <ul>About</ul>
                    <ul>Contact</ul>
                </li>
            </nav>
        </div>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="about" element={<About/>}/>
        </Routes>
    </Router>
  )
}
