import manzanaFuji from '../assets/img/manzana fuji.jpg';
import naranjasValencia from '../assets/img/Naranjas valencia.jpg';
import platanosCavendish from '../assets/img/Plátanos Cavendish.jpg';
import zanahoriasOrganicas from '../assets/img/Zanahorias Orgánicas.jpg';
import espinacasFrescas from '../assets/img/Espinacas frescas.jpg';
import pimientosTricolores from '../assets/img/Pimientos Tricolores.jpg';
import mielOrganica from '../assets/img/miel organica.jpg';
import kiwi from '../assets/img/KIWI.jpg';

const productos = [
  {
    slug: 'manzana-fuji',
    nombre: 'Manzanas Fuji',
    precio: 1200,
    descripcion: 'Manzanas Fuji crujientes y dulces.',
    imagen: manzanaFuji,
    categoria: "fruta"
  },
  {
    slug: 'naranjas-valencia',
    nombre: 'Naranjas Valencia',
    precio: 1000,
    descripcion: 'Jugosas y ricas en vitamina C.',
    imagen: naranjasValencia,
    categoria: "fruta"
  },
  {
    slug: 'platanos-cavendish',
    nombre: 'Plátanos Cavendish',
    precio: 800,
    descripcion: 'Maduros y dulces.',
    imagen: platanosCavendish,
    categoria: "fruta"
  },
  {
    slug: 'zanahorias-organicas',
    nombre: 'Zanahorias Orgánicas',
    precio: 900,
    descripcion: 'Crujientes cultivadas sin pesticidas.',
    imagen: zanahoriasOrganicas,
    categoria: "verdura"
  },
  {
    slug: 'espinacas-frescas',
    nombre: 'Espinacas Frescas',
    precio: 700,
    descripcion: 'Frescas y nutritivas.',
    imagen: espinacasFrescas,
    categoria: "verdura"
  },
  {
    slug: 'pimientos-tricolores',
    nombre: 'Pimientos Tricolores',
    precio: 1500,
    descripcion: 'Ideales para salteados.',
    imagen: pimientosTricolores,
    categoria: "verdura"
  },
  {
    slug: 'miel-organica',
    nombre: 'Miel Orgánica',
    precio: 5000,
    descripcion: 'Pura y orgánica.',
    imagen: mielOrganica,
    categoria: "organico"
  },
  {
    slug: 'kiwi',
    nombre: 'Kiwi',
    precio: 1000,
    descripcion: 'Dulces y jugosos.',
    imagen: kiwi,
    categoria: "fruta"
  }
];

export default productos;
