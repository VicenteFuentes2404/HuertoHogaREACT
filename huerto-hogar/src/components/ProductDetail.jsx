import React, { useState } from "react";
import { Link } from "react-router-dom";
import productos from "../data/productos";

const ProductDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);

  // Estado para reseñas
  const [resenas, setResenas] = useState([
    { nombre: "Juan Pérez", calificacion: 5, comentario: "Excelente producto, llegó rápido y de gran calidad." },
    { nombre: "Ana Gómez", calificacion: 4, comentario: "Muy bueno, aunque esperaba un tamaño un poco más grande." },
  ]);

  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [calificacion, setCalificacion] = useState(5);
  const [error, setError] = useState("");

  // Productos relacionados (misma categoría, distinto slug)
  const relacionados = productos.filter(
    (p) => p.categoria === producto.categoria && p.slug !== producto.slug
  );

  const handleSubmitResena = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !comentario.trim()) {
      setError("Por favor completa todos los campos antes de enviar.");
      return;
    }

    setResenas([...resenas, { nombre, calificacion, comentario }]);
    setNombre("");
    setComentario("");
    setCalificacion(5);
    setError("");
  };

  return (
    <main className="container my-5">
      {/* Migas de pan */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
          <li className="breadcrumb-item"><Link to={`/productos`}>Productos</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{producto.nombre}</li>
        </ol>
      </nav>

      <div className="row">
        {/* Carrusel de imágenes */}
        <div className="col-md-6">
          <div id="carouselProducto" className="carousel slide">
            <div className="carousel-indicators">
              {producto.imagenes.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#carouselProducto"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? "active" : ""}
                  aria-current={idx === 0 ? "true" : undefined}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {producto.imagenes.map((img, idx) => (
                <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                  <img src={img} className="d-block w-100" alt={`${producto.nombre} imagen ${idx + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselProducto" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselProducto" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>

        {/* Información del producto */}
        <div className="col-md-6">
          <h2 className="nombre-producto d-flex align-items-center">
            {producto.nombre}
            <span className={`badge ms-3 ${producto.disponible ? "bg-success" : "bg-danger"}`}>
              {producto.disponible ? "Disponible" : "No disponible"}
            </span>
          </h2>
          <p className="precio-producto">${producto.precio} CLP</p>
          <p className="descripcion-producto">{producto.detalle}</p>

          {/* Selección de cantidad */}
          <div className="mb-3">
            <label htmlFor="cantidad" className="form-label">Cantidad</label>
            <select
              id="cantidad"
              className="form-select w-25"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            >
              {[...Array(8)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1} kg</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <button className="btn btn-success">Añadir al carrito</button>
          </div>

          <h5>Origen: {producto.origen || "Valle del Maule"}</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106445.43781221042!2d-71.6715!3d-35.4264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665cf38c06b4f0d%3A0x7a1df2cbd98f2b3c!2sMaule%2C%20Chile!5e0!3m2!1ses-419!2scl!4v1694285763941!5m2!1ses-419!2scl"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Sección de reseñas */}
      <section className="mt-5">
        <h3>Reseñas de clientes</h3>

        {/* Formulario */}
        <form onSubmit={handleSubmitResena} className="mb-4">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              id="nombre"
              className="form-control w-50"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="calificacion" className="form-label">Calificación</label>
            <select
              id="calificacion"
              className="form-select w-25"
              value={calificacion}
              onChange={(e) => setCalificacion(Number(e.target.value))}
            >
              <option value={5}>★★★★★ (5)</option>
              <option value={4}>★★★★☆ (4)</option>
              <option value={3}>★★★☆☆ (3)</option>
              <option value={2}>★★☆☆☆ (2)</option>
              <option value={1}>★☆☆☆☆ (1)</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="comentario" className="form-label">Tu reseña</label>
            <textarea
              id="comentario"
              className="form-control"
              rows={3}
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Escribe tu experiencia..."
            />
          </div>

          {error && <p className="text-danger">{error}</p>}

          <button type="submit" className="btn btn-success">Enviar reseña</button>
        </form>

        {/* Lista de reseñas */}
        {resenas.map((r, idx) => (
          <div key={idx} className="reseña mb-3">
            <p><strong>{r.nombre}</strong> - {"★".repeat(r.calificacion) + "☆".repeat(5 - r.calificacion)}</p>
            <p>{r.comentario}</p>
            <hr />
          </div>
        ))}
      </section>

      {/* Productos relacionados */}
      <section className="mt-5">
        <h3>Productos relacionados</h3>
        <div className="row g-4">
          {relacionados.map((p) => (
            <div key={p.slug} className="col-md-3">
              <Link to={`/producto/${p.slug}`} className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm hover-card">
                  <img src={p.imagen} className="card-img-top" alt={p.nombre} />
                  <div className="card-body">
                    <h5 className="card-title">{p.nombre}</h5>
                    <p className="card-text">${p.precio} por kilo</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
