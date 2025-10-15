// src/pages/Home.jsx
import React from 'react';
import productos from '../data/productos'; // JS con imports de imágenes
import huertoHero from '../assets/img/huerto hero.jpg';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5 hero">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="me-4">
            <h1 className="fw-bold">TIENDA ONLINE</h1>
            <p>
              Nuestros productos ayudan a que tu huerto en casa sea más fácil de mantener y más
              productivo. Descúbrelos ahora.
            </p>
            <a href="#productos" className="btn btn-outline-dark">
              Ver productos
            </a>
          </div>
          <div>
            <img
              src={huertoHero}
              alt="Huerto"
              className="img-fluid rounded shadow hero-foto"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
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

export default Home;
