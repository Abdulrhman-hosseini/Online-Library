import React from 'react'
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row justify-content-between align-items-start">
          
          <div className="col-md-4 mb-3">
            <h5>MyBookStore</h5>
            <p className="mb-0">Your favorite online library.</p>
          </div>

          
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              This platform helps users explore and enjoy a variety of books in a
              simple and elegant way using React and Bootstrap.
            </p>
            
          </div>

          
          <div className="col-md-4 mb-3">
            <h5>Our Links</h5>
            <ul className="list-unstyled">
              <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
              
              <li><Link className="text-white text-decoration-none" to="/contact">Contact Us</Link></li>
              <li><Link className="text-white text-decoration-none" to="/login">Login</Link></li>
            </ul>
          </div>
        </div>

        
        <div className="row mt-4">
          <div className="col text-center">
            <hr className="border-light" />
            <p className="mb-0">&copy; 2025 MyBookStore. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
  
}
