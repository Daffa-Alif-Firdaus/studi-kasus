// src/pages/Home.jsx

import React, { useState } from 'react';

// --- DATA BUKU (MOCK DATA) ---
const booksData = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear', price: 150000, imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655995532l/40121378.jpg' },
  { id: 2, title: 'The Psychology of Money', author: 'Morgan Housel', price: 125000, imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594612385l/41881472.jpg' },
  { id: 3, title: 'Sapiens: A Brief History', author: 'Yuval Noah Harari', price: 180000, imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271.jpg' },
  { id: 4, title: 'Educated: A Memoir', author: 'Tara Westover', price: 165000, imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/15 Educated.jpg' },
  { id: 5, title: 'Filosofi Teras', author: 'Henry Manampiring', price: 98000, imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1541957259l/42772275.jpg' },
  { id: 6, title: 'How to Win Friends', author: 'Dale Carnegie', price: 110000, imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442726932l/4865.jpg' },
];

const BookCard = ({ book, onAddToCart }) => (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img src={book.imageUrl} className="card-img-top" alt={book.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text text-muted">{book.author}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="fw-bold fs-5">Rp{book.price.toLocaleString('id-ID')}</span>
            <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => onAddToCart(book)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
);

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-3 bg-light rounded-3">
      <h4>Shopping Cart</h4>
      <hr />
      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="my-0">{item.title}</h6>
                  <small className="text-muted">Rp{item.price.toLocaleString('id-ID')}</small>
                </div>
                <div className="d-flex align-items-center">
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button className="btn btn-sm btn-danger ms-3" onClick={() => onRemoveItem(item.id)}>✕</button>
                </div>
              </li>
            ))}
          </ul>
           <div className="d-flex justify-content-between fs-5 fw-bold">
                <span>Total</span>
                <span>Rp{totalPrice.toLocaleString('id-ID')}</span>
            </div>
        </>
      )}
    </div>
  );
};

function Home() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (bookToAdd) => {
    setCartItems(prevItems => {
      const isItemInCart = prevItems.find(item => item.id === bookToAdd.id);
      if (isItemInCart) {
        return prevItems.map(item =>
          item.id === bookToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...bookToAdd, quantity: 1 }];
    });
  };

  const handleRemoveItem = (bookId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== bookId));
  };

  const handleUpdateQuantity = (bookId, newQuantity) => {
     if (newQuantity <= 0) {
      handleRemoveItem(bookId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === bookId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-8">
          <h2 className="mb-4">Our Books Collection</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {booksData.map(book => (
              <BookCard key={book.id} book={book} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sticky-top" style={{ top: '2rem' }}>
            <Cart cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;