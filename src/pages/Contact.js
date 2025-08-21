import React, { useState } from 'react'
import ContactImage from '../assests/arrangement-with-book-light-bulb.jpg'
export default function Contact() {

     const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    
    const existing = JSON.parse(localStorage.getItem('contacts')) || [];
    localStorage.setItem('contacts', JSON.stringify([existing, formData]));

    
    setFormData({ name: '', email: '', message: '' });

    
    alert("Message saved locally!");
  };
  return (

    <div className="container mt-5 contact">
      <div className="row shadow rounded overflow-hidden">
       
        <div className="col-md-6 p-0">
          <div
            className="h-100"
            style={{
              backgroundImage: `url(${ContactImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              minHeight: '400px',
            }}
          ></div>
        </div>

       
         <div className="col-md-6 p-4 bg-white">
          <h2 className="mb-4 text-center" style={{color:'black'}}>Contact Us</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name..."
                style={{background:'white'}}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email..."
                style={{background:'white'}}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message..."
                required
                style={{background:'white'}}
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}
