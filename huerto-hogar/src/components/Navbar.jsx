import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo2.png';
import { useCart } from "../context/CartContext";
import productos from '../data/productos';

function Navbar() {
  const { cartItems } = useCart(); // productos del carrito
  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    // Busca por nombre parcial o slug
    const productoEncontrado = productos.find(p =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.slug.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (productoEncontrado) {
      navigate(`/producto/${productoEncontrado.slug}`);
      setBusqueda("");
    } else {
      alert("Producto no encontrado");
    }
  };

  return React.createElement(
    'header',
    { className: 'HeaderPrincipal' },
    React.createElement(
      'nav',
      { className: 'navbar fixed-top HeaderPrincipal' },
      React.createElement(
        'div',
        { className: 'container-fluid d-flex align-items-center' },

        // LOGO
        React.createElement(
          'div',
          null,
          React.createElement(
            Link,
            { to: '/', className: 'navbar-icono' },
            React.createElement('img', {
              src: logo,
              alt: 'Logo',
              height: '40',
              className: 'd-inline-block align-text-top'
            })
          )
        ),

        // MENÚ PRINCIPAL
        React.createElement(
          'div',
          null,
          React.createElement(
            'ul',
            { className: 'nav ms-5' },
            React.createElement('li', { className: 'nav-item' }, React.createElement(NavLink, { to: '/', className: 'nav-link linea1', 'aria-current': 'page' }, 'Inicio')),
            React.createElement('li', { className: 'nav-item' }, React.createElement(NavLink, { to: '/productos', className: 'nav-link linea1' }, 'Productos')),
            React.createElement('li', { className: 'nav-item' }, React.createElement(NavLink, { to: '/nosotros', className: 'nav-link linea1' }, 'Nosotros')),
            React.createElement('li', { className: 'nav-item' }, React.createElement(NavLink, { to: '/blogs', className: 'nav-link linea1' }, 'Blog')),
            React.createElement('li', { className: 'nav-item' }, React.createElement(NavLink, { to: '/contacto', className: 'nav-link' }, 'Contacto'))
          )
        ),

        // BARRA DE BÚSQUEDA
            React.createElement(
              'form',
              { className: 'd-flex navbar-search-form', onSubmit: handleSearch },
              React.createElement('input', {
                type: 'text',
                className: 'form-control form-control-sm navbar-search',
                placeholder: 'Buscar producto...',
                value: busqueda,
                onChange: (e) => setBusqueda(e.target.value),
              }),
              React.createElement(
                'button',
                { className: 'btn btn-success btn-sm navbar-search-btn', type: 'submit' },
                React.createElement('i', { className: 'bi bi-search' })
              )
            ),

        // CARRITO / LOGIN / REGISTRO
        React.createElement(
          'ul',
          { className: 'nav ms-auto' },
          React.createElement(
            'li',
            { className: 'nav-item' },
            React.createElement(
              NavLink,
              { to: '/carrito', className: 'nav-link' },
              React.createElement('i', { className: 'bi bi-cart4 me-1' }),
              ` (${totalItems})`
            )
          ),
          React.createElement(
            'li',
            { className: 'nav-item me-0' },
            React.createElement(
              NavLink,
              { to: '/login', className: 'nav-link' },
              'Iniciar Sesión'
            )
          ),
          React.createElement(
            'li',
            { className: 'nav-item' },
            React.createElement(
              NavLink,
              { to: '/registro', className: 'nav-link' },
              'Registrarse'
            )
          )
        )
      )
    )
  );
}

export default Navbar;
