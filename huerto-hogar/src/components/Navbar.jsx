import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo2.png';
import { useCart } from "../context/CartContext";


function Navbar() {

  const { cartItems } = useCart(); // Obtenemos los productos del carrito
  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);  //Calculamos la cantidad total de productos (sumando las cantidades)
 
  return React.createElement(
  'header',
  { className: 'HeaderPrincipal' },
  React.createElement(
    'nav',
    { className: 'navbar fixed-top HeaderPrincipal ' }, // ✅ fixed-top y un fondo para que no se vea transparente
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

            React.createElement(
              'li',
              { className: 'nav-item' },
              React.createElement(
                NavLink,
                { to: '/', className: 'nav-link linea1', 'aria-current': 'page' },
                'Inicio'
              )
            ),

          React.createElement(
                'li',
                { className: 'nav-item' },
                React.createElement(
                  NavLink,
                  { to: '/productos', className: 'nav-link linea1' },
                  'Productos'
                )
              ),

            React.createElement(
              'li',
              { className: 'nav-item' },
              React.createElement(
                NavLink,
                { to: '/nosotros', className: 'nav-link linea1' },
                'Nosotros'
              )
            ),

            React.createElement(
              'li',
              { className: 'nav-item' },
              React.createElement(
                NavLink,
                { to: '/blogs', className: 'nav-link linea1' },
                'Blog'
              )
            ),

            React.createElement(
              'li',
              { className: 'nav-item' },
              React.createElement(
                NavLink,
                { to: '/contacto', className: 'nav-link' },
                'Contacto'
              )
            )
          )
        ),

      // CARRITO / LOGIN / REGISTRO
      React.createElement(
        'ul',
        { className: 'nav ms-auto' }, // nueva lista alineada a la derecha
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
