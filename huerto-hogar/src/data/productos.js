// src/data/productos.js
import espinacasImg from '../assets/img/Espinacas frescas.jpg';
import naranjasImg from '../assets/img/Naranjas valencia.jpg';
import platanoImg from '../assets/img/Plátanos Cavendish.jpg';
import zanahoriasImg from '../assets/img/Zanahorias Orgánicas.jpg';
import pimientosImg from '../assets/img/Pimientos Tricolores.jpg';
import mielImg from '../assets/img/miel organica.jpg';
import kiwiImg from '../assets/img/KIWI.jpg';
import manzanaImg from '../assets/img/manzana fuji.jpg';

const productos = [
  {
    slug: "espinacas-frescas",
    nombre: "Espinacas Frescas",
    precio: 700,
    descripcion: "Frescas y nutritivas.",
    imagen: espinacasImg
  },
  {
    slug: "naranjas-valencia",
    nombre: "Naranjas Valencia",
    precio: 1000,
    descripcion: "Jugosas y ricas en vitamina C.",
    imagen: naranjasImg
  },
  {
    slug: "platanos-cavendish",
    nombre: "Plátanos Cavendish",
    precio: 800,
    descripcion: "Maduros y dulces.",
    imagen: platanoImg
  },
  {
    slug: "zanahorias-organicas",
    nombre: "Zanahorias Orgánicas",
    precio: 900,
    descripcion: "Crujientes cultivadas sin pesticidas.",
    imagen: zanahoriasImg
  },
  {
    slug: "pimientos-tricolores",
    nombre: "Pimientos Tricolores",
    precio: 1500,
    descripcion: "Ideales para salteados.",
    imagen: pimientosImg
  },
  {
    slug: "miel-organica",
    nombre: "Miel Orgánica",
    precio: 5000,
    descripcion: "Pura y orgánica.",
    imagen: mielImg
  },
  {
    slug: "kiwi",
    nombre: "Kiwi",
    precio: 1000,
    descripcion: "Dulces y jugosos.",
    imagen: kiwiImg
  },
  {
    slug: "manzanas-fuji",
    nombre: "Manzanas Fuji",
    precio: 1200,
    descripcion: "Manzanas Fuji crujientes y dulces.",
    imagen: manzanaImg
  }
];

export default productos;
