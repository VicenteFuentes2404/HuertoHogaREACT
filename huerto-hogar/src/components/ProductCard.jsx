

import React, { useState } from "react"; //  Importamos useState para manejar estados locales


//  Recibimos props: 'producto' para los datos y 'addToCart' para agregar al carrito
function ProductCard({ producto, addToCart }) {
  // Estado local para mostrar un mensaje temporal cuando se añade al carrito
  const [mensaje, setMensaje] = useState("");

  //  Función que se ejecuta al presionar el botón "Añadir al carrito"
  const handleAdd = () => {
    addToCart(producto); // Llama a la función del Context para actualizar el carrito global
    setMensaje("Producto añadido"); //  Muestra el mensaje en pantalla
    setTimeout(() => setMensaje(""), 2000); //  Limpia el mensaje después de 2 segundos
  };

  return (
    <div className="col-md-3">
      <div className="card h-100 shadow">
        {/*  Imagen del producto */}
        <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />

        <div className="card-body d-flex flex-column">
          {/*  Nombre y descripción */}
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>
          <p className="fw-bold">${producto.precio}</p>

          {/* Botón para añadir al carrito */}
          <button className="btn btn-success mt-auto" onClick={handleAdd}>
            Añadir
          </button>

          {/* Mensaje temporal que aparece al añadir el producto */}
          {mensaje && <p className="text-success mt-2">{mensaje}</p>}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;