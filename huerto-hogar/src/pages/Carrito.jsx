import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function Carrito() {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const [descuento, setDescuento] = useState(0);

  //  Cálculo del total en tiempo real
  const total = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const totalFinal = total - total * descuento;

  const aplicarCupon = (codigo) => {
    if (codigo === "DESCUENTO10") {
      setDescuento(0.1);
      alert("Cupón aplicado ✅ 10% de descuento");
    } else {
      setDescuento(0);
      alert("Cupón no válido ❌");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">🛒 Mi carrito de compras</h1>
      <div className="row">
        {/* Lista de productos */}
        <div className="col-md-8">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.slug}
                className="row mb-3 align-items-center border rounded p-2"
              >
                <div className="col-2">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-4">
                  <h5>{item.nombre}</h5>
                  <p className="mb-1">{item.descripcion}</p>
                  <p className="fw-bold">${item.precio.toLocaleString()}</p>
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => decrementQuantity(item.slug)}
                  >
                    −
                  </button>
                  <input
                    type="text"
                    readOnly
                    value={item.cantidad}
                    className="form-control text-center mx-2"
                    style={{ width: "60px" }}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => incrementQuantity(item.slug)}
                  >
                    +
                  </button>
                </div>
                <div className="col-2 text-end">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.slug)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">Tu carrito está vacío 🛍️</p>
          )}
        </div>

        {/*Resumen */}
        <div className="col-md-4 border rounded p-3">
          <h4>Resumen de compra</h4>
          <hr />
          <div className="d-flex justify-content-between">
            <span>Subtotal:</span>
            <strong>${total.toLocaleString()}</strong>
          </div>
          <div className="d-flex justify-content-between">
            <span>Descuento:</span>
            <strong>{descuento * 100}%</strong>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span>Total:</span>
            <strong>${totalFinal.toLocaleString()}</strong>
          </div>

          <div className="mt-3">
            <input
              type="text"
              placeholder="Código cupón"
              id="cupon"
              className="form-control mb-2"
            />
            <button
              className="btn btn-success w-100"
              onClick={() =>
                aplicarCupon(document.getElementById("cupon").value)
              }
            >
              Aplicar cupón
            </button>
          </div>

          <button className="btn btn-primary w-100 mt-3">Pagar</button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
