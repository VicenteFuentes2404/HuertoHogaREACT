// src/pages/Contacto.jsx
import React, { useState } from "react";
import logoHuerto from "../assets/img/logo-huerto.png";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let errores = [];
    const regexCorreo = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

    // Validar nombre
    if (!nombre.trim()) {
      errores.push("El nombre es obligatorio.");
    } else if (nombre.length > 100) {
      errores.push("El nombre no puede tener más de 100 caracteres.");
    }

    // Validar correo
    if (!correo.trim()) {
      errores.push("El correo electrónico es obligatorio.");
    } else if (!regexCorreo.test(correo)) {
      errores.push(
        "Por favor ingresa un correo válido (@duoc.cl, @profesor.duoc.cl o @gmail.com)."
      );
    } else if (correo.length > 100) {
      errores.push("El correo no puede tener más de 100 caracteres.");
    }

    // Validar mensaje
    if (!mensaje.trim()) {
      errores.push("El comentario es obligatorio.");
    } else if (mensaje.length > 500) {
      errores.push("El comentario no puede tener más de 500 caracteres.");
    }

    // Mostrar errores o éxito
    if (errores.length > 0) {
      alert("Corrige los siguientes errores:\n\n" + errores.join("\n"));
    } else {
      alert("¡Mensaje enviado correctamente!");
      setNombre("");
      setCorreo("");
      setMensaje("");
    }
  };

  return (
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
                  <h1 className="fs-4 card-title fw-bold mb-4 text-center">
                    Contáctanos
                  </h1>

                  <form id="contactoForm" onSubmit={handleSubmit} autoComplete="off">
                    {/* Nombre completo */}
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="nombre">
                        Nombre completo
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>

                    {/* Correo */}
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="correo">
                        Correo electrónico
                      </label>
                      <input
                        id="correo"
                        type="email"
                        className="form-control"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                      />
                    </div>

                    {/* Mensaje */}
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="mensaje">
                        Comentario
                      </label>
                      <textarea
                        id="mensaje"
                        className="form-control"
                        rows="5"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                      ></textarea>
                    </div>

                    {/* Botón enviar */}
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-success">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>

                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    Te responderemos a la brevedad
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contacto;
