import React from 'react';
import { Link } from 'react-router-dom';
import AdvSupplySlide from '../../../imgs/advance-crane-ltd-about.jpg';
import AdvInspectionsSlide from '../../../imgs/advance-crane-ltd-services-1.jpeg';
import AdvRepairSlide from '../../../imgs/advance-crane-ltd-services-slide.jpeg';
import InspIcon from '../../../imgs/advance-crane-inspections-icon.png';
import ServIcon from '../../../imgs/advance-crane-service-icon.png';
import SupIcon from '../../../imgs/advance-crane-supply-icon.png';
import AppImg from '../../../imgs/advance-crane-digital-inspection-app-image-1.png'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
  <div>
  <Carousel className='main-carousel'>
    <Carousel.Item>
      <img className="slider-img d-block w-100" src={AdvSupplySlide} alt="First slide"/>
      <Carousel.Caption>
      <Link to='services/'><h3 className='slider-text'>SUPPLY</h3></Link>
        <p className='slider-text'>The Crane supplies you need, from industry leaders.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="slider-img d-block w-100" src={AdvInspectionsSlide} alt="Second slide"/>
      <Carousel.Caption>
      <Link to='services/'><h3 className='slider-text'>INSPECTIONS</h3></Link>
        <p className='slider-text'>Have your Cranes inspected for compliance and safety.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="slider-img d-block w-100" src={AdvRepairSlide} alt="Third slide"/>
      <Carousel.Caption>
      <Link to='services/'><h3 className='slider-text'>MAINTENANCE &#38; REPAIR</h3></Link>
        <p className='slider-text'>Certified and reliable; Maintenance and Repair by Advance Crane LTD</p>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='row service-icon-container rounded'>
      <div className='col-lg-4'>
        <Link to='services/'>
          <div className='service-img-container rounded'>
            <img className='img-fluid services-icon' src={InspIcon} alt='Crane Inspection by Advance Crane LTD' title='Crane Inspection by Advance Crane LTD'/>
            <p>Inspection</p>
          </div>
        </Link>
      </div>
      <div className='col-lg-4'>
        <Link to='services/'>
          <div className='service-img-container rounded'>
            <img className='img-fluid services-icon' src={SupIcon} alt='Crane Supplies from Advance Crane LTD' title='Crane Supplies from Advance Crane LTD'/>
            <p>Service</p>
           </div>
        </Link>
      </div>
      <div className='col-lg-4'>
        <Link to='services/'>
          <div className='service-img-container rounded'>
            <img className='img-fluid services-icon' src={ServIcon} alt='Crane Services from Advance Crane LTD' title='Crane Services from Advance Crane LTD'/>
            <p>Supply</p>
          </div>
        </Link>
      </div>
    </div>
  <hr/>
  <div className='app-info'>
  <div className='row'>
    <div className='col-sm-12'>
      <br/>
      <h3>Forward Thinking and Innovation: Digital Inspection</h3>
      <hr/>
      <p>Advance Crane LTD doesn't just inspect, service, and maintain your cranes; we also futureproof your services and machinery with accurate and advanced internal digital tracking.</p>
      <p>Utilizing this proprietary technology we are able to give you a much sharper picture of your equipment; it's past, present, and future.</p>
    </div>
  </div>
  <div className='row get-the-app'>
    <div className='col-sm-12'>
    <hr/>
    <h4>More Info</h4>
    <hr/>
      <p>If you would like to learn more about Advance Crane's Digital Inspection App, and how it helps us serve you better, please Contact Us.</p>
      <Link to='/contact'><Button className='btn-success app-contact-button'>Contact</Button></Link>
    </div>
  </div>
  </div>
  </div>
  )
}
