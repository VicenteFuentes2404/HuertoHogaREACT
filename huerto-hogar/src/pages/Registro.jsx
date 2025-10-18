// src/pages/Registro.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logoHuerto from "../assets/img/logo-huerto.png";

function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    password: "",
    confirmPassword: "",
    telefono: "",
    region: "-- Región --",
    comuna: "-- Comuna --",
  });

  const [errores, setErrores] = useState({});

  const emailRegex = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
  const telefonoRegex = /^[0-9]{7,15}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrores({ ...errores, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let erroresTemp = {};

    // Validaciones
    if (!formData.nombre.trim()) erroresTemp.nombre = "El nombre completo es obligatorio";

    if (!formData.correo.trim()) erroresTemp.correo = "El correo electrónico es obligatorio";
    else if (!emailRegex.test(formData.correo.trim()))
      erroresTemp.correo = "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com";
    else if (formData.correo.trim().length > 100)
      erroresTemp.correo = "El correo debe tener como máximo 100 caracteres";

    if (!formData.password.trim()) erroresTemp.password = "La contraseña es obligatoria";
    else if (formData.password.trim().length < 4)
      erroresTemp.password = "La contraseña debe tener al menos 4 caracteres";
    else if (formData.password.trim().length > 10)
      erroresTemp.password = "La contraseña debe tener como máximo 10 caracteres";

    if (formData.password !== formData.confirmPassword)
      erroresTemp.confirmPassword = "La contraseña y su confirmación no coinciden";

    if (formData.telefono.trim() && !telefonoRegex.test(formData.telefono.trim()))
      erroresTemp.telefono = "El teléfono debe contener solo números (7 a 15 dígitos)";

    if (formData.region === "-- Región --") erroresTemp.region = "Debes seleccionar una región";
    if (formData.comuna === "-- Comuna --") erroresTemp.comuna = "Debes seleccionar una comuna";

    setErrores(erroresTemp);

    if (Object.keys(erroresTemp).length === 0) {
      alert("¡Registro exitoso!");
      // Reiniciar formulario
      setFormData({
        nombre: "",
        correo: "",
        password: "",
        confirmPassword: "",
        telefono: "",
        region: "-- Región --",
        comuna: "-- Comuna --",
      });
    }
  };

  return (
    <>
      <Navbar />

      <main className="h-100">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-sm-center h-100">
              <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                <div className="text-center my-5">
                  <img src={logoHuerto} alt="logo" width="250" />
                </div>

                <div className="card shadow-lg">
                  <div className="card-body p-5">
                    <h1 className="fs-4 card-title fw-bold mb-4">Registro de usuario</h1>
                    <form onSubmit={handleSubmit} noValidate autoComplete="off">
                      {/* Nombre completo */}
                      <div className="mb-3">
                        <label htmlFor="nombre" className="mb-2 text-muted">Nombre completo</label>
                        <input
                          type="text"
                          id="nombre"
                          className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
                          value={formData.nombre}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">{errores.nombre}</div>
                      </div>

                      {/* Correo */}
                      <div className="mb-3">
                        <label htmlFor="correo" className="mb-2 text-muted">Correo</label>
                        <input
                          type="email"
                          id="correo"
                          className={`form-control ${errores.correo ? "is-invalid" : ""}`}
                          value={formData.correo}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">{errores.correo}</div>
                      </div>

                      {/* Contraseña */}
                      <div className="mb-3">
                        <label htmlFor="password" className="text-muted">Contraseña</label>
                        <input
                          type="password"
                          id="password"
                          className={`form-control ${errores.password ? "is-invalid" : ""}`}
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">{errores.password}</div>
                      </div>

                      {/* Confirmar contraseña */}
                      <div className="mb-3">
                        <label htmlFor="confirmPassword" className="text-muted">Confirmar contraseña</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className={`form-control ${errores.confirmPassword ? "is-invalid" : ""}`}
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">{errores.confirmPassword}</div>
                      </div>

                      {/* Teléfono */}
                      <div className="mb-3">
                        <label htmlFor="telefono" className="mb-2 text-muted">Teléfono (opcional)</label>
                        <input
                          type="tel"
                          id="telefono"
                          className={`form-control ${errores.telefono ? "is-invalid" : ""}`}
                          value={formData.telefono}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">{errores.telefono}</div>
                      </div>

                      {/* Región y comuna */}
                      <div className="row mb-3">
                        <div className="col">
                          <select
                            id="region"
                            className={`form-select ${errores.region ? "is-invalid" : ""}`}
                            value={formData.region}
                            onChange={handleChange}
                          >
                            <option>-- Región --</option>
                            <option value="1">Región Metropolitana de Santiago</option>
                            <option value="2">Región de la Araucanía</option>
                            <option value="3">Región de Ñuble</option>
                          </select>
                          <div className="invalid-feedback">{errores.region}</div>
                        </div>
                        <div className="col">
                          <select
                            id="comuna"
                            className={`form-select ${errores.comuna ? "is-invalid" : ""}`}
                            value={formData.comuna}
                            onChange={handleChange}
                          >
                            <option>-- Comuna --</option>
                            <option value="1">Linares</option>
                            <option value="2">Longaví</option>
                            <option value="3">Concepción</option>
                          </select>
                          <div className="invalid-feedback">{errores.comuna}</div>
                        </div>
                      </div>

                      {/* Botón */}
                      <div className="d-flex align-items-center justify-content-center">
                        <button type="submit" className="btn btn-success">Registrar</button>
                      </div>
                    </form>
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

export default Registro;
