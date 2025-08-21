import React, { useState } from 'react'
import Sky from '../assests/silhouettes-hills-street-lamps-cloudy-sky-beautiful-sunset.jpg'
import { Link } from 'react-router-dom';

export default function Register() {
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert('Account created!');
    
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${Sky})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div className="bg-dark bg-opacity-75 p-5 rounded-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-white text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              className="form-control rounded-pill ps-4"
              placeholder="Username"
              style={{background:'white'}}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control rounded-pill ps-4"
              placeholder="Email"
              style={{background:'white'}}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control rounded-pill ps-4"
              placeholder="Password"
              style={{background:'white'}}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="confirmPassword"
              className="form-control rounded-pill ps-4"
              placeholder="Confirm Password"
              style={{background:'white'}}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-light w-100 rounded-pill fw-bold">
            Create Account
          </button>
        </form>

        <p className="text-center mt-3 text-white-50 small">
          Already have an account?{' '}
          <Link to="/login" className="text-white text-decoration-underline">Login</Link>
        </p>
      </div>
    </div>
  )
}
