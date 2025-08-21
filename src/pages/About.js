import React from 'react'
import AboutImage from '../assests/composition-with-book-light-bulb.jpg'

export default function About() {
  return (
    
   <div className="container mt-5">
      <div className="row align-items-center">
        <h1 style={{marginBottom: '50px' }}> About Us</h1>
        
       
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={AboutImage}
            alt="About us"
            className="img-fluid rounded-4 shadow"
          />
        </div>

        
        <div className="col-md-6 text-center text-md-start"  >
          <h2 className="mb-4">About Our Project</h2>
          <p className="lead">
            Welcome to our online book library! 📚
            <br />
            This platform helps users explore and enjoy a variety of books in a simple and elegant way using React and Bootstrap.
          </p>
          <p className="text-muted">
            Developed by Abdulrhman Hosseini – 2025.
            <br />
            Powered by passion, code, and ☕ coffee.
          </p>
        </div>
      </div>
    </div>
  )
}
