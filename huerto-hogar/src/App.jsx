import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Producto from './pages/Producto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
  // Diagnóstico rápido:
  console.log('Navbar type:', typeof Navbar);
  console.log('Footer type:', typeof Footer);
  console.log('Home type:', typeof Home);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Navbar),
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: '/', element: React.createElement(Home) }),
      React.createElement(Route, { path: '/producto/:slug', element: React.createElement(Producto) }),
      React.createElement(Route, { path: '/carrito', element: React.createElement(Carrito) }),
      React.createElement(Route, { path: '/contacto', element: React.createElement(Contacto) }),
      React.createElement(Route, { path: '/nosotros', element: React.createElement(Nosotros) }),
      React.createElement(Route, { path: '/login', element: React.createElement(Login) }),
      React.createElement(Route, { path: '/registro', element: React.createElement(Registro) }),
    ),
    React.createElement(Footer)
  );
}
export default App;
