import React from 'react';
// Ganti import Link menjadi NavLink
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <NavLink to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="bi me-2" viewBox="0 0 118 94" role="img"><title>Bookstore</title><path fill="currentColor" d="M3.9 11.9a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v70a4 4 0 0 1-4 4H7.9a4 4 0 0 1-4-4v-70zm4 0v70h20v-70H7.9zM50.9 0a4 4 0 0 1 4 4v86a4 4 0 0 1-4 4h-20a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h20zm0 4h-20v86h20V4zM113.9 11.9a4 4 0 0 0-4-4h-20a4 4 0 0 0-4 4v70a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-70zm-4 0v70h-20v-70h20z"></path></svg>
          <span className="fs-4">BookSales</span>
        </NavLink>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {/* Ganti semua Link menjadi NavLink */}
          <li><NavLink to="/" className="nav-link px-2">Home</NavLink></li>
          <li><NavLink to="/team" className="nav-link px-2">Team</NavLink></li>
          <li><NavLink to="/contact" className="nav-link px-2">Contact</NavLink></li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;