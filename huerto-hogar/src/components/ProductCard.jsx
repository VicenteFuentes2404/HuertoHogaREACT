// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ producto }) {
  return (
    <div className="col-md-3">
      <div className="card h-100 shadow">
        <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>
          <p className="fw-bold">${producto.precio}</p>
          <div className="d-flex justify-content-center">
            <Link to={`/producto/${producto.slug}`} className="btn btn-success">
              Añadir
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;


/* Qué incluye:

Imagen en la parte superior

Título, descripción y precio

Botón “Añadir” centrado

Diseño idéntico al de tu HTML base */