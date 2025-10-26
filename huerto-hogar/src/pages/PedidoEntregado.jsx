import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css"; // asegúrate de tener tu style.css

const PedidoEntregado = () => {
  const pasos = [
    { texto: "Pedido recibido", fecha: "10 oct 2025" },
    { texto: "Pedido en preparación", fecha: "11 oct 2025" },
    { texto: "Listo para entrega", fecha: "12 oct 2025" },
    { texto: "Pedido en camino", fecha: "13 oct 2025" },
    { texto: "Pedido entregado", fecha: "14 oct 2025" },
  ];

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="mb-4 text-center text-success">
            <i className="bi me-2"></i> Seguimiento del Pedido #1228
          </h3>

          <div className="timeline-horizontal">
            {pasos.map((paso, index) => (
              <div key={index} className="timeline-step">
                {index !== pasos.length - 1 && <div className="timeline-line"></div>}

                <div className="timeline-circle">
                  <i className="bi bi-check-lg"></i>
                </div>

                <div className="timeline-text">
                  <h6>{paso.texto}</h6>
                  <small>{paso.fecha}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-outline-secondary"
              onClick={() => window.history.back()}
            >
              <i className="bi bi-arrow-left"></i> Volver al perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidoEntregado;
