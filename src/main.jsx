// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
// Anda tidak perlu lagi import './index.css' jika tidak ada style khusus di sana
// Bootstrap sudah di-link di index.html

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);