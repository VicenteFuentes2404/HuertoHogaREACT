import React from 'react';
import { Link } from 'react-router-dom';
import productos from '../data/productos.json';

function Home() {
  return React.createElement(
    'div',
    { className: 'container py-4' },
    React.createElement('h1', { className: 'text-center mb-4' }, 'Huerto Hogar'),
    React.createElement(
      'div',
      { className: 'row g-3' },
      productos.map((p) =>
        React.createElement(
          'div',
          { key: p.slug, className: 'col-12 col-md-4' },
          React.createElement(
            'div',
            { className: 'card h-100' },
            React.createElement('img', { src: p.imagen, className: 'card-img-top', alt: p.nombre }),
            React.createElement(
              'div',
              { className: 'card-body' },
              React.createElement('h5', { className: 'card-title' }, p.nombre),
              React.createElement('p', { className: 'card-text' }, '$' + p.precio),
              React.createElement(Link, { to: '/producto/' + p.slug, className: 'btn btn-primary' }, 'Ver más')
            )
          )
        )
      )
    )
  );
}

export default Home;
