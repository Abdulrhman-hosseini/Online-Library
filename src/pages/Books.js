import React from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom'
import { OurBook } from '../OurBook/OurBook';
import ReactStars from "react-rating-stars-component";

export default function Books() {
   const { setCartCount } = useOutletContext();
    const {id} = useParams()
      const bookId = parseInt(id);

  const book = OurBook.find(b => b.id === bookId);

  const addToCart = () => {
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

  
  const alreadyInCart = existingCart.find(item => item.id === book.id);
  if (alreadyInCart) return; 

 
  existingCart.push(book);
  localStorage.setItem('cart', JSON.stringify(existingCart));

 
  setCartCount(existingCart.length);
};

    
    
  return (
     <div className="container mt-5 d-flex justify-content-start">
  <div className="card" style={{ maxWidth: '800px' }}>
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src={book.image}
          className="img-fluid rounded-start h-100 object-fit-cover"
          alt={book.title}
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h3 className="card-title">{book.title}</h3>
          <p className="card-text">{book.description}</p>
          <p className="card-text text-muted">{book.price}</p>
           
          
          <button  style={{background: 'white',border:'none', color:'black'}} onClick={addToCart}  className="btn btn-success mt-3">
                🛒 Add to cart
              </button>
        
        </div>
      </div>
    </div>
  </div>
</div>


  )
}


