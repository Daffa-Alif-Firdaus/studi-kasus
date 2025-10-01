// src/pages/Contact.jsx

import React from 'react';

function Contact() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <h1 className="mb-3">Contact Us</h1>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="your-name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="your-name" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="your-email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="your-email" required />
              </div>
              <div className="col-12">
                <label htmlFor="your-message" className="form-label">Your Message</label>
                <textarea className="form-control" id="your-message" rows="5" required></textarea>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-md-6">
                    <button type="submit" className="btn btn-dark w-100 fw-bold">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;