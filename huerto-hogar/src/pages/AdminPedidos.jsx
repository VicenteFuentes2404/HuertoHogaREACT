import React from "react";
import AdminSidebar from "../components/AdminSidebar";

function AdminPedidos() {
  return (
    <div className="d-flex">
      <AdminSidebar />
      <main className="flex-grow-1 p-4 ms-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h1>Pedidos</h1>
            <a href="/admin/registro-usuario" className="btn btn-success ms-5">
              Nuevo usuario
            </a>
          </div>
          <a href="#" className="me-5 text-dark fs-4">
            <i className="bi bi-bell-fill"></i>
          </a>
        </div>

        <div className="form col-2 mt-3">
          <select className="form-select" id="selectadmin">
            <option selected>Todos los pedidos</option>
          </select>
        </div>

        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Pedido</th>
              <th>Cliente</th>
              <th>Estado</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/10/2025</td>
              <td>Pedido 001</td>
              <td>María López</td>
              <td>En proceso</td>
              <td>$120.000</td>
            </tr>
            <tr>
              <td>02/10/2025</td>
              <td>Pedido 002</td>
              <td>Carlos Pérez</td>
              <td>Entregado</td>
              <td>$85.500</td>
            </tr>
          </tbody>
        </table>

        <section>
          <div className="row justify-content-center">
            <div className="col-auto">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Anterior
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                
                      Siguiente
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminPedidos;
