// src/pages/Boleta.jsx
import React from "react";

export default function Boleta() {
  const productos = [
    { nombre: "Manzanas Fuji", cantidad: 1, precio: 1200 },
    { nombre: "Naranjas Valencia", cantidad: 1, precio: 1000 },
    { nombre: "Plátanos Cavendish", cantidad: 1, precio: 800 },
    { nombre: "Zanahorias Orgánicas", cantidad: 1, precio: 900 }
  ];

  const subtotal = productos.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const descuento = 0;

  const fecha = new Date().toLocaleString("es-CL");
  const numBoleta = Math.floor(Math.random() * 1000000);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Boleta Electrónica</h1>
      <div className="card p-4 shadow-sm" style={{ maxWidth: "600px", margin: "0 auto", borderTop: "4px solid rgb(158, 190, 169)" }}>
        <div className="text-center mb-4">
          <p><strong>Huerto Hogar</strong></p>
          <p>RUT: 76.543.210-1</p>
          <p>Fecha: {fecha}</p>
          <p>N° Boleta: {numBoleta}</p>
        </div>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Producto</th>
              <th className="text-center">Cant.</th>
              <th className="text-end">Precio</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((item, i) => (
              <tr key={i}>
                <td>{item.nombre}</td>
                <td className="text-center">{item.cantidad}</td>
                <td className="text-end">${item.precio.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-between mt-3">
          <span>Subtotal</span>
          <span>${subtotal.toLocaleString()}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Descuento</span>
          <span>${descuento.toLocaleString()}</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between fw-bold fs-5">
          <span>Total</span>
          <span>${(subtotal - descuento).toLocaleString()}</span>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-success w-75" onClick={() => window.print()}>Imprimir Boleta</button>
        </div>
      </div>
    </div>
  );
}
