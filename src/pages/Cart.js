import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { setCartCount } = useOutletContext();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

 const handleRemove = (id) => {
  const updatedCart = cartItems.filter(item => item.id !== id);
  setCartItems(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));

  
  setCartCount(updatedCart.length);
};

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('EGP', '').trim());
    return total + price;
  }, 0);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4 text-primary">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-muted">
          <p>Your cart is empty.</p>
          <Link to="/" className="btn btn-outline-primary">Back to Shop</Link>
        </div>
      ) : (
        <>
          
          <div className="d-flex justify-content-end mb-4">
            <Link to="/check" className="btn btn-success btn-lg">
              ✅ Proceed to Checkout
            </Link>
          </div>

         
          <div className="row g-4">
            {cartItems.map(item => (
              <div className="col-md-4" key={item.id}>
                <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-muted small">{item.description.slice(0, 80)}...</p>
                    <h6 className="text-success fw-bold">{item.price}</h6>
                    <button
                      className="btn btn-outline-danger btn-sm mt-auto"
                      onClick={() => handleRemove(item.id)}
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="text-end mt-4">
            <h4>
              Total: <span className="text-success fw-bold">{totalPrice} EGP</span>
            </h4>
          </div>
        </>
      )}
    </div>
  );
}
