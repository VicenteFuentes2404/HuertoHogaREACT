import React, { useState } from "react";
import logoHuerto from "../assets/img/logo-huerto.png";

export default function Registro() {
  const [values, setValues] = useState({
    registroNombre: "",
    registroCorreo: "",
    registroPassword: "",
    registroConfirmPassword: "",
    registroTelefono: "",
    registroRegion: "-- Región --",
    registroComuna: "-- Comuna --",
  });

  const [errors, setErrors] = useState({}); // { campoId: "mensaje" }

  const emailRegex = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
  const telefonoRegex = /^[0-9]{7,15}$/;

  const onChange = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({ ...prev, [id]: value }));
    // limpiar error en tiempo real
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      registroNombre,
      registroCorreo,
      registroPassword,
      registroConfirmPassword,
      registroTelefono,
      registroRegion,
      registroComuna,
    } = values;

    const newErrors = {};

    // Validaciones (idénticas a tu script)
    if (!registroNombre.trim()) {
      newErrors.registroNombre = "El nombre completo es obligatorio";
    }

    if (!registroCorreo.trim()) {
      newErrors.registroCorreo = "El correo electrónico es obligatorio";
    } else if (!emailRegex.test(registroCorreo.trim())) {
      newErrors.registroCorreo =
        "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com";
    } else if (registroCorreo.trim().length > 100) {
      newErrors.registroCorreo =
        "El correo debe tener como máximo 100 caracteres";
    }

    if (!registroPassword.trim()) {
      newErrors.registroPassword = "La contraseña es obligatoria";
    } else if (registroPassword.trim().length < 4) {
      newErrors.registroPassword =
        "La contraseña debe tener al menos 4 caracteres";
    } else if (registroPassword.trim().length > 10) {
      newErrors.registroPassword =
        "La contraseña debe tener como máximo 10 caracteres";
    }

    if (registroPassword.trim() !== registroConfirmPassword.trim()) {
      newErrors.registroConfirmPassword =
        "La contraseña y su confirmación no coinciden";
    }

    if (registroTelefono.trim() && !telefonoRegex.test(registroTelefono.trim())) {
      newErrors.registroTelefono =
        "El teléfono debe contener solo números (7 a 15 dígitos)";
    }

    if (registroRegion === "-- Región --") {
      newErrors.registroRegion = "Debes seleccionar una región";
    }
    if (registroComuna === "-- Comuna --") {
      newErrors.registroComuna = "Debes seleccionar una comuna";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Aquí antes hacías form.submit(); en SPA normalmente harías un fetch/axios.
      // Por ahora simulo envío correcto:
      console.log("Datos enviados:", values);
      alert("✅ Registro enviado correctamente");
      // Si quieres limpiar el formulario:
      // setValues({
      //   registroNombre: "",
      //   registroCorreo: "",
      //   registroPassword: "",
      //   registroConfirmPassword: "",
      //   registroTelefono: "",
      //   registroRegion: "-- Región --",
      //   registroComuna: "-- Comuna --",
      // });
    }
  };

  return (
    <main>
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            {/* col-* se mantienen tal cual */}
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-5">
                <img src={logoHuerto} alt="logo" width="250" />
              </div>

              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Registro de usuario</h1>

                  <form
                    id="registroForm"
                    method="POST"
                    className="needs-validation"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    {/* Nombre completo */}
                    <div className="mb-3">
                      <label htmlFor="registroNombre" className="mb-2 text-muted">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.registroNombre ? "is-invalid" : ""}`}
                        id="registroNombre"
                        value={values.registroNombre}
                        onChange={onChange}
                        required
                      />
                      <div className="invalid-feedback">
                        {errors.registroNombre || "El nombre es requerido"}
                      </div>
                    </div>

                    {/* Correo */}
                    <div className="mb-3">
                      <label htmlFor="registroCorreo" className="mb-2 text-muted">
                        Correo
                      </label>
                      <input
                        type="email"
                        className={`form-control ${errors.registroCorreo ? "is-invalid" : ""}`}
                        id="registroCorreo"
                        value={values.registroCorreo}
                        onChange={onChange}
                        required
                      />
                      <div className="invalid-feedback">
                        {errors.registroCorreo || "El correo electrónico no es válido"}
                      </div>
                    </div>

                    {/* Contraseña */}
                    <div className="mb-3">
                      <label htmlFor="registroPassword" className="text-muted">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className={`form-control ${errors.registroPassword ? "is-invalid" : ""}`}
                        id="registroPassword"
                        value={values.registroPassword}
                        onChange={onChange}
                        required
                      />
                      <div className="invalid-feedback">
                        {errors.registroPassword || "La contraseña es requerida"}
                      </div>
                    </div>

                    {/* Confirmar contraseña */}
                    <div className="mb-3">
                      <label htmlFor="registroConfirmPassword" className="text-muted">
                        Confirmar contraseña
                      </label>
                      <input
                        type="password"
                        className={`form-control ${errors.registroConfirmPassword ? "is-invalid" : ""}`}
                        id="registroConfirmPassword"
                        value={values.registroConfirmPassword}
                        onChange={onChange}
                        required
                      />
                      <div className="invalid-feedback">
                        {errors.registroConfirmPassword || "La confirmación es requerida"}
                      </div>
                    </div>

                    {/* Teléfono */}
                    <div className="mb-3">
                      <label htmlFor="registroTelefono" className="mb-2 text-muted">
                        Teléfono (opcional)
                      </label>
                      <input
                        type="tel"
                        className={`form-control ${errors.registroTelefono ? "is-invalid" : ""}`}
                        id="registroTelefono"
                        value={values.registroTelefono}
                        onChange={onChange}
                      />
                      <div className="invalid-feedback">
                        {errors.registroTelefono || "El número de teléfono no es válido"}
                      </div>
                    </div>

                    {/* Región y comuna */}
                    <div className="row mb-3">
                      <div className="col">
                        <select
                          id="registroRegion"
                          className={`form-select ${errors.registroRegion ? "is-invalid" : ""}`}
                          value={values.registroRegion}
                          onChange={onChange}
                        >
                          <option>-- Región --</option>
                          <option value="1">Región Metropolitana de Santiago</option>
                          <option value="2">Región de la Araucanía</option>
                          <option value="3">Región de Ñuble</option>
                        </select>
                        <div className="invalid-feedback">
                          {errors.registroRegion || "Debes seleccionar una región"}
                        </div>
                      </div>

                      <div className="col">
                        <select
                          id="registroComuna"
                          className={`form-select ${errors.registroComuna ? "is-invalid" : ""}`}
                          value={values.registroComuna}
                          onChange={onChange}
                        >
                          <option>-- Comuna --</option>
                          <option value="1">Linares</option>
                          <option value="2">Longaví</option>
                          <option value="3">Concepción</option>
                        </select>
                        <div className="invalid-feedback">
                          {errors.registroComuna || "Debes seleccionar una comuna"}
                        </div>
                      </div>
                    </div>

                    {/* Botón */}
                    <div className="d-flex align-items-center justify-content-center">
                      <button type="submit" className="btn btn-success">
                        Registrar
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
