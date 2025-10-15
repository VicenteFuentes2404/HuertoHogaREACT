import React from 'react';
import ProductCard from '../components/ProductCard';
import productos from '../data/productos'; // aquí cargamos la info
// recuerda: productos.js exporta un array con {slug, nombre, descripcion, precio, imagen}

function Productos() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5 hero">
        <div className="container d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="fw-bold">Productos</h1>
            <p>
              Nuestros productos ayudan a que tu huerto en casa sea más fácil de mantener y más productivo.
              Descúbrelos ahora.
            </p>
          </div>
        </div>
      </section>

      {/* FILTROS (botones sin lógica por ahora) */}
      <section className="container my-4 text-center">
        <h4>Filtrar por categoría</h4>
        <div className="btn-group" role="group">
          <button className="btn btn-outline-success active">Todos</button>
          <button className="btn btn-outline-success">Frutas</button>
          <button className="btn btn-outline-success">Verduras</button>
          <button className="btn btn-outline-success">Orgánicos</button>
        </div>
      </section>

      {/* LISTADO DE PRODUCTOS */}
      <section className="container my-5" id="productos">
        <div className="row g-4">
          {productos.map((p) => (
            <ProductCard
              key={p.slug}
              slug={p.slug}
              nombre={p.nombre}
              descripcion={p.descripcion}
              precio={p.precio}
              imagen={p.imagen}
            />
          ))}
        </div>
      </section>

      {/* PAGINACIÓN (decorativa por ahora) */}
      <section>
        <div className="row justify-content-center">
          <div className="col-auto">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#">Anterior</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Siguiente</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Productos;
