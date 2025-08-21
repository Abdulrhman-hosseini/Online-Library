
import {  useState } from 'react';
import './App.css';

import Home from './pages/Home';
import { OurBook } from './OurBook/OurBook';

import Footer from './components/Footer';
import About from './pages/About';
import { Link, useOutletContext } from 'react-router-dom';





function App() {

  // دي عشان تستقبل اليانات اللى جايه من Outlet  {useOutletContext();}
   const { searchTerm } = useOutletContext();    


  const filteredBooks = OurBook.filter(book => {
    const search = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(search) ||
      book.description.toLowerCase().includes(search) ||
      book.price.toLowerCase().includes(search)
    );
  });


  

  return (
    <div className="App">
     
     <Home/>

    <div className="container mt-5">
  <h2 className="text-center mb-4 fw-bold">📚 Books Collection</h2>

  <div className="row">
    {filteredBooks.map((book) => (
      <div className="col-md-3 col-sm-6 mb-4" key={book.id}>
        <div className="card shadow-sm h-100 border-0 rounded-4 overflow-hidden hover-card">
          <img
            src={book.image}
            className="card-img-top"
            alt={book.title}
            style={{ height: '180px', objectFit: 'cover' }}
          />
          <div className="card-body d-flex flex-column">
            <h6 className="card-title fw-bold text-purple" style={{ color: '#6f42c1' }}>
              {book.title}
            </h6>

            <p className="card-text text-muted small mb-2" style={{ flexGrow: 1 }}>
              {book.description.slice(0, 80)}...
            </p>

            <h6 className="text-success fw-bold mb-3">{book.price}</h6>

            <Link
              to={`/books/${book.id}`}
              className="btn btn-sm btn-outline-primary rounded-pill mt-auto"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    <About/>
    

     
     
     
    </div>
  );
}

export default App;
