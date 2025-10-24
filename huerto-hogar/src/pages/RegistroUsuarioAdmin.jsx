import React from "react";
import AdminSidebar from "../components/AdminSidebar";

function RegistroUsuarioAdmin() {
  return (
    <div className="d-flex">
      <AdminSidebar />
      <main className="row justify-content-center w-100 p-4">
        <div className="card p-4 shadow-sm" style={{ maxWidth: "600px" }}>
          <h2 className="row justify-content-center fw-bold mb-4">Nuevo Usuario</h2>

          <form>
            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input type="text" className="form-control" maxLength="50" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellidos</label>
              <input type="text" className="form-control" maxLength="100" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input type="email" className="form-control" maxLength="100" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirmar correo</label>
              <input type="email" className="form-control" maxLength="100" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirmar contraseña</label>
              <input type="password" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono (opcional)</label>
              <input type="tel" className="form-control" />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Región</label>
                <select className="form-select" required>
                  <option value="">-- Seleccione la región --</option>
                  <option value="rm">Región Metropolitana</option>
                  <option value="valpo">Región de Valparaíso</option>
                  <option value="biobio">Región del Biobío</option>
                  <option value="araucania">Región de La Araucanía</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Comuna</label>
                <select className="form-select" required>
                  <option value="">-- Seleccione la comuna --</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Registrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default RegistroUsuarioAdmin;
