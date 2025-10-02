import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import komponen Layout utama dan semua halaman
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';

// Definisikan struktur routing menggunakan objek
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App.jsx sekarang menjadi layout utama
    children: [
      {
        index: true, // Halaman utama (path: "/") akan merender Home
        element: <Home />,
      },
      {
        path: "team", // path: "/team"
        element: <Team />,
      },
      {
        path: "contact", // path: "/contact"
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);