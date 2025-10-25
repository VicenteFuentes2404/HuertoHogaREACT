import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";

const PedidoEnCamino = () => {
  const pasos = [
    { texto: "Pedido recibido", fecha: "10 oct 2025", estado: "completado" },
    { texto: "Pedido en preparación", fecha: "10 oct 2025", estado: "completado" },
    { texto: "Listo para entrega", fecha: "10 oct 2025", estado: "completado" },
    { texto: "Pedido en camino", fecha: "11 oct 2025", estado: "actual" },
    { texto: "Pedido entregado", fecha: "11 oct 2025", estado: "pendiente" },
  ];

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="mb-4 text-center text-success">
                <i className="bi me-2"></i> Seguimiento del Pedido #1234
        </h3>


          <div className="timeline-horizontal">
            {pasos.map((paso, index) => (
              <div key={index} className="timeline-step">
                {index !== pasos.length - 1 && (
                  <div
                    className="timeline-line"
                    style={{
                      backgroundColor:
                        pasos[index].estado === "pendiente" ? "#ccc" : "#28a745",
                    }}
                  ></div>
                )}

                <div
                  className="timeline-circle"
                  style={{
                    backgroundColor:
                      paso.estado === "completado"
                        ? "#28a745"
                        : paso.estado === "actual"
                        ? "#ffc107"
                        : "#ccc",
                  }}
                >
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

export default PedidoEnCamino;
