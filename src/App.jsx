import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Konten halaman (Home, Team, Contact) akan dirender di sini */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;