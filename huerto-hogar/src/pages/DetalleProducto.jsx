// src/pages/DetalleProducto.jsx
import React from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos";
import ProductDetail from "../components/ProductDetail";

const DetalleProducto = () => {
  // Tomamos el "slug" de la URL (por ejemplo /producto/manzana-fuji)
  const { slug } = useParams();

  // Buscamos el producto correspondiente
  const producto = productos.find(p => p.slug === slug);

  // Si no lo encuentra, muestra un mensaje
  if (!producto) {
    return <h2 className="text-center mt-5">Producto no encontrado</h2>;
  }

  // Si existe, renderiza el componente de detalle
  return <ProductDetail producto={producto} />;
};

export default DetalleProducto;
