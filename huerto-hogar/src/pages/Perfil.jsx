// src/pages/Perfil.jsx
import React from "react";

const Perfil = () => {
  return (
    <main className="container my-5">
      <h1 className="mb-4">Mi Perfil</h1>

      <div className="row">
        {/* DATOS DEL CLIENTE */}
        <div className="col-md-6 mb-4">
          <div
            className="p-4 border rounded shadow-sm"
            style={{ borderColor: "rgb(158, 190, 169)" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>Datos Personales</h4>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => (window.location.href = "/editar-perfil")}
                >
                <i className="bi bi-pencil-square"></i> Editar
                </button>

            </div>
            <p><strong>Nombre:</strong> Juan Pérez</p>
            <p><strong>Email:</strong> juanperez@duoc.com</p>
            <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
            <p><strong>Dirección:</strong> Av. Siempre Viva 742</p>
          </div>
        </div>

        {/* SEGUIMIENTO DE COMPRAS */}
        <div className="col-md-6 mb-4">
          <div
            className="p-4 border rounded shadow-sm"
            style={{ borderColor: "rgb(158, 190, 169)" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>Seguimiento de Compras</h4>
              <i className="bi bi-truck" style={{ fontSize: "1.5rem" }}></i>
            </div>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Pedido #1234 <span className="badge bg-warning text-dark">En camino</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Pedido #1228 <span className="badge bg-success">Entregado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Perfil;
