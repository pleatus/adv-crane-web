import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
/*const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();*/
/*import Server from '../../../server.js';*/

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, company, phone, select, email, contactMessage } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      company: company.value,
      phone: phone.value,
      select: select.value,
      message: contactMessage.value,
    };
    console.log(details.message);
    let response = await fetch("http://localhost:5000/emailsend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className='contact-form'>
      <h1>Contact Advance Crane LTD</h1>
      <hr/>
      <Form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <Form.Group className='contact-form'>
              <Form.Label>Your Name<span className='form-required'>*</span></Form.Label>
              <Form.Control size='lg' id='name' type='text' placeholder='Your Name Here' required/>
            </Form.Group>
          </div>
          <div className='col-lg-6 col-md-12'>
            <Form.Group className='contact-form'>
              <Form.Label>Your Company<span className='form-required'>*</span></Form.Label>
              <Form.Control size='lg' id='company' type='text' placeholder='Your Company Name Here' required/>
            </Form.Group>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <Form.Group className='contact-form'>
              <Form.Label>Contact Phone<span className='form-required'>*</span></Form.Label>
              <Form.Control size='lg' id='phone' type='tel' placeholder='Enter Your Contact Number' required/>
            </Form.Group>
          </div>
          <div className='col-lg-6 col-md-12'>
            <Form.Group className='contact-form'>
              <Form.Label>Contact Email<span className='form-required'>*</span></Form.Label>
              <Form.Control size='lg' id='email' type='email' placeholder='Enter Your Email' required/>
            </Form.Group>
          </div>
        </div>
        <hr/>
        <Form.Group className='contact-form'>
          <Form.Label>Reason for Contact<span className='form-required'>*</span></Form.Label>
          <Form.Select size='lg' id='select' required>
            <option>General Inquiry</option>
            <option>Digital Inspection App</option>
            <option>Crane Service</option>
            <option>Crane Maintenance</option>
            <option>Crane Inspection</option>
            <option>Crane Supplies</option>
            <option>Crane Modification</option>  
          </Form.Select>
        </Form.Group>
        <Form.Group className='contact-form'>
          <Form.Label>Message<span className='form-required'>*</span></Form.Label>
          <Form.Control size='lg' id='contactMessage' className='form-big-text' as='textarea' rows={4} placeholder='Please Provide A Brief Explanation Of Why You Are Contacting Us Today So We Can Serve You Better!' required/>
        </Form.Group>
        <hr/>
        <Button className='contact-submit' type='submit'>{status}</Button>
      </Form>
      <hr/>
      <p><span className='form-required'>*</span> - Denotes a required field</p>
    </div>
  )
}
  export default ContactForm;