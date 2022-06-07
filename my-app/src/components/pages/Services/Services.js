import React from 'react';
import { Link } from 'react-router-dom';
import AdvServicesImg1 from '../../../imgs/advance-crane-ltd-services-1.jpeg';
import AdvServicesImg2 from '../../../imgs/advance-crane-ltd-about.jpg';
import AdvServicesImg3 from '../../../imgs/advance-crane-ltd-services-3.jpg';
import Button from 'react-bootstrap/Button';

 // This function will scroll the window to the top 
 const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smoothly scrolling
  });
};

export default function Services() {
  return (
    <div className='page-content advance-crane-services'>
    <h1>Services</h1>
    <hr/>
      <div id='inspections' className='row'>
        <div className='col-md-6 splash-image'>
          <img className='img-fluid' src={AdvServicesImg1} alt='Advance Crane LTD About' title='Advance Crane LTD About'/>
        </div>
        <div className='col-md-6 main-text'>
          <h2>Inspections</h2>
          <hr className='page-subheading'/>
          <p>At Advance Crane; our specialty is overhead crane inspections.</p>
          <p>Overhead crane's are one of the most dynamic crane types due to the wide variety of jobs it can be used for.</p>
          <p>Advance Crane conducts frequent and periodic inspections guided by the <strong>CSA-B167-6</strong> to ensure your cranes are properly maintained.</p>
          <hr/>
          <Link to="/contact" onClick={scrollToTop}><div className='service-button'><Button className='btn-success'>Book Inspection</Button></div></Link>
        </div>
      </div>
      <div id='supply' className='row'>
        <div className='col-md-6 main-text'>
          <h2>Supply</h2>
          <hr className='page-subheading'/>
          <p>Through partnerships with leaders in the crane manufacturing space, Advance Crane is able to supply any style of crane or lifting device.</p>
          <p>Our partners include:</p>
          <ul className='advance-crane-partners'>
            <li><a href='https://stahl.ca/' target="_blank" rel="noreferrer" title="Stahl Crane Systems">Stahl Crane Systems</a></li>
            <li><a href='https://www.columbusmckinnon.com/' target="_blank" rel="noreferrer" title="Columbus McKinnon">Columbus McKinnon</a></li>
            <li><a href='https://www.xtek.com/' target="_blank" rel="noreferrer" title="X-Tek Corporation">X-Tek Corp.</a></li>
            <li><a href='https://www.conductix.ca/en' target="_blank" rel="noreferrer" title="Conductix">Conductix</a></li>
            <li>and other premier dealers.</li>
          </ul>
          <hr/>
          <Link to="/contact" className='service-button' onClick={scrollToTop}><div className='service-button'><Button className='btn-success' size='huge'>Get Supplies</Button></div></Link>
        </div>
        <div className='col-md-6 splash-image'>
          <img className='img-fluid' src={AdvServicesImg2} alt='Advance Crane LTD About' title='Advance Crane LTD About'/>
        </div>
      </div>
      <div id='modification' className='row'>
        <div className='col-md-6 splash-image'>
          <img className='img-fluid' src={AdvServicesImg3} alt='Advance Crane LTD About' title='Advance Crane LTD About'/>
        </div>
        <div className='col-md-6 main-text'>
          <h2>Service &#38; Modification</h2>
          <hr className='page-subheading'/>
          <p>Advance Crane has significant resources and experience to upgrade crane capacities, drives, controls and power supplies.</p>
          <p>Our sister company, Rossdale Machine Inc. is also certified in accordance with <strong>CSA W47.1 Div. 2</strong>, to perform any structural repairs or construction of new cranes and equipment.</p>
          <hr/>
          <Link to="/contact" className='service-button' onClick={scrollToTop}><div className='service-button'><Button className='btn-success'>Request Service</Button></div></Link>
        </div>
      </div>
  </div>
  )
}
