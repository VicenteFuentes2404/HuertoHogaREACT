import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const navigate = useNavigate();

  // Estado para cliente
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
  });

  // Estado para dirección
  const [direccion, setDireccion] = useState({
    region: "Metropolitana",
    comuna: "",
    calle: "",
    numero: "",
    referencia: "",
  });

  const handleClienteChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleDireccionChange = (e) => {
    setDireccion({ ...direccion, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirigir a la boleta visual
    navigate("/boleta");
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Checkout</h1>
      <div className="row">
        {/* RESUMEN DE COMPRA */}
        <div className="col-md-6 mb-4">
          <h4>Resumen de compra</h4>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li
                key={item.slug}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.nombre} x {item.cantidad}
                <span>${(item.precio * item.cantidad).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between fw-bold mb-3">
            <span>Total:</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>

        {/* INFORMACIÓN DEL CLIENTE + DIRECCIÓN */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            {/* INFORMACIÓN DEL CLIENTE */}
            <h4>Información del cliente</h4>
            <small className="text-muted mb-3 d-block">
              Completa la información de contacto
            </small>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={cliente.nombre}
                onChange={handleClienteChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                name="apellido"
                value={cliente.apellido}
                onChange={handleClienteChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={cliente.telefono}
                onChange={handleClienteChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input
                type="email"
                name="correo"
                value={cliente.correo}
                onChange={handleClienteChange}
                className="form-control"
                required
              />
            </div>

            {/* DIRECCIÓN */}
            <h4 className="mt-4">Dirección de despacho</h4>
            <small className="text-muted mb-3 d-block">
              Completa los datos de envío
            </small>
            <div className="mb-3">
              <label className="form-label">Región</label>
              <select
                name="region"
                value={direccion.region}
                onChange={handleDireccionChange}
                className="form-select"
                disabled
              >
                <option value="Metropolitana">Metropolitana</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Comuna</label>
              <select
                name="comuna"
                value={direccion.comuna}
                onChange={handleDireccionChange}
                className="form-select"
                required
              >
                <option value="">Selecciona comuna</option>
                <option value="Santiago">Santiago</option>
                <option value="San Bernardo">San Bernardo</option>
                <option value="El Bosque">El Bosque</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Calle</label>
              <input
                type="text"
                name="calle"
                value={direccion.calle}
                onChange={handleDireccionChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Número</label>
              <input
                type="text"
                name="numero"
                value={direccion.numero}
                onChange={handleDireccionChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Referencia</label>
              <input
                type="text"
                name="referencia"
                value={direccion.referencia}
                onChange={handleDireccionChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-success w-100 mt-3">
              Finalizar compra
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}


