import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ producto, addToCart }) {
  const [mensaje, setMensaje] = useState("");

  const handleAdd = (e) => {
    e.stopPropagation(); // Evita que el clic del botón active el Link
    e.preventDefault();  // Evita que el Link navegue al hacer clic en el botón
    addToCart(producto);
    setMensaje("Producto añadido");
    setTimeout(() => setMensaje(""), 2000);
  };

  return (
    <div className="col-md-3">
      <Link 
        to={`/producto/${producto.slug}`} 
        className="text-decoration-none text-dark"
      >
        <div className="card h-100 shadow d-flex flex-column">
          <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <p className="fw-bold">${producto.precio}</p>

            <button className="btn btn-success mt-auto" onClick={handleAdd}>
              Añadir
            </button>

            {mensaje && <p className="text-success mt-2">{mensaje}</p>}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
