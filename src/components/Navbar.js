import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ searchTerm, setSearchTerm ,cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid">
        
        <Link className="navbar-brand fw-bold" to="/">
          Welcome
        </Link>

      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

            
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/cart">
                🛒
               {cartCount > 0 && (
    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
      {cartCount}
    </span>
  )}
              </Link>
            </li>

            
            <li className="nav-item w-100 w-lg-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </li>

            
            <li className="nav-item">
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => document.body.classList.toggle('dark-mode')}
              >
                🌓
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
