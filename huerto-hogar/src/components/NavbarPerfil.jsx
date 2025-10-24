// src/components/NavbarPerfil.jsx
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo2.png";
import { useCart } from "../context/CartContext";

function NavbarPerfil() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    // Aquí puedes limpiar tokens / estado global si los tienes
    alert("Sesión cerrada");
    navigate("/login");
  };

  return (
    <header className="HeaderPrincipal">
      <nav className="navbar fixed-top HeaderPrincipal">
        <div className="container-fluid d-flex align-items-center">
          {/* LOGO */}
          <div>
            <Link to="/" className="navbar-icono">
              <img
                src={logo}
                alt="Logo"
                height="40"
                className="d-inline-block align-text-top"
              />
            </Link>
          </div>

          {/* MENÚ PRINCIPAL */}
          <div>
            <ul className="nav ms-5">
              <li className="nav-item">
                <NavLink to="/" className="nav-link linea1">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/productos" className="nav-link linea1">
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/nosotros" className="nav-link linea1">
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blogs" className="nav-link linea1">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacto" className="nav-link">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>

          {/* CARRITO / PERFIL */}
          <ul className="nav ms-auto">
            <li className="nav-item">
              <NavLink to="/carrito" className="nav-link">
                <i className="bi bi-cart4 me-1"></i>({totalItems})
              </NavLink>
            </li>

            {/* Dropdown de Perfil */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="perfilMenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle"></i> Perfil
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="perfilMenu"
              >
                <li>
                  <Link className="dropdown-item" to="/perfil">
                    Ver Perfil
                  </Link>
                </li>
                <li>
                  <button
                    className="dropdown-item text-danger"
                    onClick={cerrarSesion}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavbarPerfil;
