import React from 'react'
import AdvAboutImg from '../../../imgs/advance-crane-ltd-about.jpg';

export default function About() {
  return (
    <div className='page-content advance-crane-about'>
      <h1>About</h1>
      <hr/>
    <div className='row'>
      <div className='col-md-6 splash-image'>
        <img className='img-fluid' src={AdvAboutImg} alt='Advance Crane LTD About' title='Advance Crane LTD About'/>
      </div>
      <div className='col-md-6 main-text'>
        <p>Advance Crane is a full service overhead crane &#38; hoist service company.</p>
        <p>As a subsidiary of <a href="http://www.rossdalemachine.com" target="_blank" rel="noreferrer" title="Rossdale Machine Inc.">Rossdale Machine Inc.</a>, Advance Crane has extensive expertise in the inspection, maintenance, repair and installation of all types of cranes &#38; hoists.</p> 
        <p>We are the Manitoba authorized dealer for <a href="https://www.magnetekdrives.com/" target="_blank" rel="noreferrer" title="Magnetek">Magnetek</a> material handling - a worldwide supplier of crane control products, <a href="https://www.xtek.com/" target="_blank" rel="noreferrer" title="Xtek Corporation">Xtek Corporation</a> - supplier of crane wheels, gears, couplings &#38; drive shafts, as well as <a href="https://stahl.ca/" rel="noreferrer" target="_blank" title="Stahl">Stahl</a>.</p>
      </div>
    </div>
    </div>
  )
}
