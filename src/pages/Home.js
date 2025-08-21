import React, { useEffect, useState } from 'react';
import BOOKphoto from '../assests/WhatsApp Image 2025-07-07 at 18.09.07_9c17592f.jpg'

export default function Home() {
 

  return (
    <div className="container py-5" style={{minHeight:'85vh'}}>
      <div className="row align-items-center">

       
        <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
          <h1 className="display-5 fw-bold">📚 Welcome to the world of knowledge</h1>
          <p className="lead">
            Explore the best books, courses, and carefully selected products.
          </p>
        </div>

        
        <div className="col-md-6">
          <img
            src={BOOKphoto}
            alt="Books"
            className="img-fluid rounded-4 shadow"
          />
        </div>

      </div>
    </div>
  );
}
