import React from 'react';
import productos from '../data/productos'; // 👈 ahora es el JS con imports de imágenes
import { Link } from 'react-router-dom';
import huertoHero from '../assets/img/huerto hero.jpg';

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
            <div key={p.slug} className="col-md-3">
              <div className="card h-100 shadow hover-card">
                <img src={p.imagen} className="card-img-top" alt={p.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{p.nombre}</h5>
                  <p className="card-text">{p.descripcion}</p>
                  <p className="fw-bold">${p.precio}</p>
                  <Link to={`/producto/${p.slug}`} className="btn btn-success">
                    Ver Producto
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
