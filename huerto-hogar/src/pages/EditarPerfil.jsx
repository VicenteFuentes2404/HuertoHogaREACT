import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function EditarPerfil() {
  // Simulamos que los datos vienen del Perfil.jsx
  const [perfil, setPerfil] = useState({
    nombre: "Juan",
    apellido: "Perez",
    correo: "juanperez@duoc.cl",
  });

  const [formData, setFormData] = useState({
    correo: "",
    confirmarCorreo: "",
    contraseña: "",
    confirmarContraseña: "",
  });

  const [errores, setErrores] = useState({});

  useEffect(() => {
    setFormData({
      correo: perfil.correo,
      confirmarCorreo: perfil.correo,
      contraseña: "",
      confirmarContraseña: "",
    });
  }, [perfil]);

  const validar = () => {
    const nuevosErrores = {};
    const patronCorreo = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

    if (!formData.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio.";
    } else if (formData.correo.length > 100) {
      nuevosErrores.correo = "Máx. 100 caracteres.";
    } else if (!patronCorreo.test(formData.correo)) {
      nuevosErrores.correo = "Debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.";
    }

    if (formData.correo !== formData.confirmarCorreo) {
      nuevosErrores.confirmarCorreo = "Los correos no coinciden.";
    }

    if (!formData.contraseña.trim()) {
      nuevosErrores.contraseña = "La contraseña es obligatoria.";
    } else if (formData.contraseña.length < 4 || formData.contraseña.length > 10) {
      nuevosErrores.contraseña = "Debe tener entre 4 y 10 caracteres.";
    }

    if (formData.contraseña !== formData.confirmarContraseña) {
      nuevosErrores.confirmarContraseña = "Las contraseñas no coinciden.";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      alert("Datos actualizados correctamente");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="col-md-10 col-lg-8 bg-white p-4 shadow rounded">
        <h2 className="text-center mb-3">Editar Perfil</h2>
        <p className="text-center text-muted mb-4">Actualiza tu información personal</p>

        <form onSubmit={handleSubmit}>
          {/* Nombre y Apellido (no editables) */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control bg-light"
                value={perfil.nombre}
                readOnly
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control bg-light"
                value={perfil.apellido}
                readOnly
              />
            </div>
          </div>

          {/* Correo */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className={`form-control ${errores.correo ? "is-invalid" : ""}`}
              />
              {errores.correo && (
                <div className="invalid-feedback">{errores.correo}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">Confirmar correo</label>
              <input
                type="email"
                name="confirmarCorreo"
                value={formData.confirmarCorreo}
                onChange={handleChange}
                className={`form-control ${errores.confirmarCorreo ? "is-invalid" : ""}`}
              />
              {errores.confirmarCorreo && (
                <div className="invalid-feedback">{errores.confirmarCorreo}</div>
              )}
            </div>
          </div>

          {/* Contraseña */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                name="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
                className={`form-control ${errores.contraseña ? "is-invalid" : ""}`}
              />
              {errores.contraseña && (
                <div className="invalid-feedback">{errores.contraseña}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">Confirmar contraseña</label>
              <input
                type="password"
                name="confirmarContraseña"
                value={formData.confirmarContraseña}
                onChange={handleChange}
                className={`form-control ${errores.confirmarContraseña ? "is-invalid" : ""}`}
              />
              {errores.confirmarContraseña && (
                <div className="invalid-feedback">{errores.confirmarContraseña}</div>
              )}
            </div>
          </div>

          {/* Botón */}
          <div className="text-center mt-4">
            <div className="text-center mt-4">
            <button type="submit" className="btn btn-success px-5">
                Guardar cambios
            </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarPerfil;
