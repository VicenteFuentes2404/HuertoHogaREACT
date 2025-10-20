// src/pages/Productos.jsx
import React, { useState } from "react";
import "../assets/css/style.css";
import ProductCard from "../components/ProductCard";
import productos from "../data/productos";
import { useCart } from '../context/CartContext';


function Productos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  const { addToCart } = useCart();
  
  // Filtramos los productos según la categoría seleccionada
  const productosFiltrados =
    categoriaSeleccionada === "todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <main>
      {/* HERO */}
      <section className="py-5 hero text-center">
        <div className="container">
          <h1 className="fw-bold">Productos</h1>
          <p>
            Nuestros productos ayudan a que tu huerto en casa sea más fácil de mantener y más productivo. 
            Descúbrelos ahora.
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="container my-4 text-center">
        <h4>Filtrar por categoría</h4>
        <div className="btn-group" role="group">
          <button
            className={`btn btn-outline-success ${categoriaSeleccionada === "todos" ? "active" : ""}`}
            onClick={() => setCategoriaSeleccionada("todos")}
          >
            Todos
          </button>
          <button
            className={`btn btn-outline-success ${categoriaSeleccionada === "fruta" ? "active" : ""}`}
            onClick={() => setCategoriaSeleccionada("fruta")}
          >
            Frutas
          </button>
          <button
            className={`btn btn-outline-success ${categoriaSeleccionada === "verdura" ? "active" : ""}`}
            onClick={() => setCategoriaSeleccionada("verdura")}
          >
            Verduras
          </button>
          <button
            className={`btn btn-outline-success ${categoriaSeleccionada === "organico" ? "active" : ""}`}
            onClick={() => setCategoriaSeleccionada("organico")}
          >
            Orgánicos
          </button>
        </div>
      </section>

      {/* LISTADO DE PRODUCTOS */}
      <section className="container my-5" id="productos">
        <div className="row g-4">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((p) => (
              <ProductCard key={p.slug} producto={p} addToCart={addToCart} />
            ))
          ) : (
            <p className="text-center">No hay productos en esta categoría.</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Productos;
