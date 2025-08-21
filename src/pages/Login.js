import React, { useState } from 'react'
import Sky from '../assests/silhouettes-hills-street-lamps-cloudy-sky-beautiful-sunset.jpg'
import { Link } from 'react-router-dom';

export default function Login() {
     const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ formData});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in!');
    
  };
  return (
   <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage:`url(${Sky})` , 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(4px)',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="bg-dark bg-opacity-75 p-5 rounded-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-white text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
         
          <div className="mb-3 position-relative">
            <input
              type="text"
              name="username"
              className="form-control rounded-pill ps-4"
              placeholder="Username"
              style={{background:'white'}}
              onChange={handleChange}
              required
            />
            <i className="bi bi-person-fill position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
          </div>

        
          <div className="mb-3 position-relative">
            <input
              type="password"
              name="password"
              className="form-control rounded-pill ps-4"
              placeholder="Password"
              style={{background:'white'}}
              onChange={handleChange}
              required
            />
            <i className="bi bi-lock-fill position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
          </div>

          
          <div className="d-flex justify-content-between text-white-50 mb-3 small">
            <div>
              <input type="checkbox" className="form-check-input me-1" />
              Remember me
            </div>
            <Link to="#" className="text-decoration-none text-white-50">Forgot Password?</Link>
          </div>

          
          <button type="submit" className="btn btn-light w-100 rounded-pill fw-bold">
            Login
          </button>
        </form>

       
        <p className="text-center mt-3 text-white-50 small">
          Don’t have an account? <Link to="/register" className="text-white text-decoration-underline">Register</Link>
        </p>
      </div>
    </div>
  )
}
