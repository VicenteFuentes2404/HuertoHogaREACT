import React from "react";
import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard() {
  return (
    <div className="d-flex">
      <AdminSidebar />
      <main className="p-4 w-100">
        <h2 className="mb-4">Bienvenido, administrador</h2>
        <p>Selecciona una opción del menú lateral para comenzar.</p>
      </main>
    </div>
  );
}

export default AdminDashboard;
