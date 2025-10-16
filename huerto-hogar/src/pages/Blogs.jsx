
import React from "react";
import "../assets/css/style.css";

function Blogs() {
  return (
    <main>
      <div className="text-center mt-4 mb-4">
        <h1>NOTICIAS IMPORTANTES</h1>
      </div>

      {/* Artículos */}
      <section>
        <article>
          <div className="card m-5 p-5">
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">Las plantas también tienen “amigas”</h4>
                  <p className="card-text">
                    En una huerta, algunas plantas crecen mejor cuando están juntas: por ejemplo, el tomate y la albahaca son grandes compañeros. La albahaca ayuda a ahuyentar plagas, y a cambio el tomate le da sombra para que no se reseque tan rápido. ¡Una amistad deliciosa!
                  </p>
                  <button className="btn btn-success mt-5">Ver caso</button>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../assets/img/huertoamigo.jpg")}
                  className="img-fluid rounded-start"
                  alt="Huerto Amigo"
                  style={{ maxHeight: "40vh" }}
                />
              </div>
            </div>
          </div>
        </article>

        <article>
          <div className="card m-5 p-5">
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">Zanahorias que ven mejor con cebollas</h4>
                  <p className="card-text">
                    Cuando se siembran juntas, las cebollas ayudan a proteger a las zanahorias de una plaga llamada “mosca de la zanahoria”. Así, mientras crecen lado a lado, las dos se cuidan mutuamente y logran mejores cosechas.
                  </p>
                  <button className="btn btn-success mt-5">Ver caso</button>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../assets/img/zanahoriascebollas.jpg")}
                  className="img-fluid rounded-start"
                  alt="Zanahorias y Cebollas"
                  style={{ maxHeight: "40vh" }}
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Paginación */}
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

export default Blogs;
