// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo2.png';
import { useCart } from "../context/CartContext";
import productos from '../data/productos';

function Navbar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const productoEncontrado = productos.find(p =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.slug.toLowerCase().includes(busqueda.toLowerCase())
    );
    if (productoEncontrado) {
      navigate(`/producto/${productoEncontrado.slug}`);
      setBusqueda("");
    } else {
      alert("Producto no encontrado");
    }
  };

  return (
    <header className='HeaderPrincipal'>
      <nav className='navbar fixed-top HeaderPrincipal'>
        <div className='container-fluid d-flex align-items-center'>
          {/* LOGO */}
          <div>
            <Link to='/' className='navbar-icono'>
              <img src={logo} alt='Logo' height='40' className='d-inline-block align-text-top' />
            </Link>
          </div>

          {/* MENÚ PRINCIPAL */}
          <div>
            <ul className='nav ms-5'>
              <li className='nav-item'><NavLink to='/' className='nav-link linea1' aria-current='page'>Inicio</NavLink></li>
              <li className='nav-item'><NavLink to='/productos' className='nav-link linea1'>Productos</NavLink></li>
              <li className='nav-item'><NavLink to='/nosotros' className='nav-link linea1'>Nosotros</NavLink></li>
              <li className='nav-item'><NavLink to='/blogs' className='nav-link linea1'>Blog</NavLink></li>
              <li className='nav-item'><NavLink to='/contacto' className='nav-link'>Contacto</NavLink></li>
            </ul>
          </div>

          {/* BARRA DE BÚSQUEDA */}
          <form className='d-flex navbar-search-form' onSubmit={handleSearch}>
            <input
              type='text'
              className='form-control form-control-sm navbar-search'
              placeholder='Buscar producto...'
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button className='btn btn-success btn-sm navbar-search-btn' type='submit'>
              <i className='bi bi-search'></i>
            </button>
          </form>

          {/* CARRITO / LOGIN / REGISTRO */}
          <ul className='nav ms-auto'>
            <li className='nav-item'>
              <NavLink to='/carrito' className='nav-link'>
                <i className='bi bi-cart4 me-1'></i>
                {` (${totalItems})`}
              </NavLink>
            </li>
            <li className='nav-item me-0'>
              <NavLink to='/login' className='nav-link'>Iniciar Sesión</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/registro' className='nav-link'>Registrarse</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;