import React from 'react';
import AdvSafetyImg from '../../../imgs/advance-crane-ltd-safety.jpeg';

export default function Safety() {
  return (
    <div className='page-content advance-crane-safety'>
      <h1>Safety</h1>
      <hr/>
    <div className='row'>
      <div className='col-md-6 splash-image'>
        <img className='img-fluid' src={AdvSafetyImg} alt='Advance Crane LTD About' title='Advance Crane LTD About'/>
      </div>
      <div className='col-md-6 main-text'>
      <p>Advance Crane Ltd. is committed to a <em>world class safety culture</em>, whether on-site or in our shop.</p>
      <p>We are:</p>
        <ul>
          <li>COR certified since our inception in 2016</li>
          <li>INS Net certified in 2019</li>
          <li>E-Rail Safe</li>
        </ul>
      <p>Our employees are:</p>
        <ul>
          <li>fully trained in WHMIS</li>
          <li>fall arrest</li>
          <li>aerial boom lifts</li>
          <li>lockouts</li>
          <li>confined space entry</li>
          <li>H2S alive</li>
          <li>forklift operation</li>
          <li>JSA completion</li>
        </ul>
        <p>Our skills and practices go through a constant review and update process to ensure we maintain best industry practices.</p>
        <p>We make use of our digital inspection app and a host of equipment to adequately support our operations. These include an air monitor, temporary life lines, and fall protection equipment.</p>
      </div>
    </div>
    </div>
  )
}
