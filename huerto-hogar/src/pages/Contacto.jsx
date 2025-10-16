// src/pages/Contacto.jsx
import React from "react";
import Footer from "../components/Footer";
import logoHuerto from "../assets/img/logo-huerto.png";

function Contacto() {
  return (
    <>
      <main>
        <section className="h-100 py-5">
          <div className="container h-100">
            <div className="row justify-content-sm-center h-100">
              <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                <div className="text-center my-5">
                    <img src={logoHuerto} alt="logo" width="250" />
                </div>

                <div className="card shadow-lg">
                  <div className="card-body p-5">
                    <h1 className="fs-4 card-title fw-bold mb-4 text-center">Contáctanos</h1>
                    <form id="contactoForm" method="POST" autoComplete="off">
                      {/* Nombre completo */}
                      <div className="mb-3">
                        <label className="mb-2 text-muted" htmlFor="nombre">Nombre completo</label>
                        <input id="nombre" type="text" className="form-control" name="nombre" />
                      </div>
                      {/* Correo */}
                      <div className="mb-3">
                        <label className="mb-2 text-muted" htmlFor="correo">Correo electrónico</label>
                        <input id="correo" type="email" className="form-control" name="correo" />
                      </div>
                      {/* Mensaje */}
                      <div className="mb-3">
                        <label className="mb-2 text-muted" htmlFor="mensaje">Comentario</label>
                        <textarea id="mensaje" className="form-control" name="mensaje" rows="5"></textarea>
                      </div>
                      {/* Botón enviar */}
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success">Enviar</button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer py-3 border-0">
                    <div className="text-center">Te responderemos a la brevedad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}

export default Contacto;
