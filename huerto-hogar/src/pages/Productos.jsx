import React from "react";
import "../assets/css/style.css";
import ProductCard from "../components/ProductCard";
import productos from "../data/productos"; // Tu JS con productos

function Productos() {
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

      {/* LISTADO DE PRODUCTOS */}
      <section className="container my-5" id="productos">
        <div className="row g-4">
          {productos.map((p) => (
            <ProductCard key={p.slug} producto={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Productos;
