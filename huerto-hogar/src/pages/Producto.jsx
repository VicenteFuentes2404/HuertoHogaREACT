import React from 'react';
import { useParams } from 'react-router-dom';
// 🔹 Cambiado a productos.js que ya importa imágenes
import productos from '../data/productos';

function Producto() {
  const { slug } = useParams();
  const prod = productos.find((p) => p.slug === slug);

  if (!prod)
    return React.createElement(
      'p',
      { className: 'text-center mt-5' },
      'Producto no encontrado'
    );

  return React.createElement(
    'div',
    { className: 'container py-5' },
    React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'col-md-6' },
        React.createElement('img', {
          src: prod.imagen,
          alt: prod.nombre,
          className: 'img-fluid rounded'
        })
      ),
      React.createElement(
        'div',
        { className: 'col-md-6' },
        React.createElement('h2', null, prod.nombre),
        React.createElement('p', null, '$' + prod.precio),
        React.createElement('p', null, prod.descripcion),
        React.createElement('button', { className: 'btn btn-success' }, 'Agregar al carrito')
      )
    )
  );
}

export default Producto;
