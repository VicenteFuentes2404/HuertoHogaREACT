import manzanaFuji from '../assets/img/manzana fuji.jpg';
import manzanaFuji2 from '../assets/img/manzanas fuji 2.PNG';
import manzanaFuji3 from '../assets/img/Manzana fuji 3.jpg';
import naranjasValencia from '../assets/img/Naranjas valencia.jpg';
import naranjasValencia2 from '../assets/img/Naranjas Valencia2.jpg';
import naranjasValencia3 from '../assets/img/Naranjas Valencia3.jpg';
import platanosCavendish from '../assets/img/Plátanos Cavendish.jpg';
import platanosCavendish2 from '../assets/img/platanosCavendish2.jpg';
import platanosCavendish3 from '../assets/img/platanosCavendish3.jpg';
import zanahoriasOrganicas from '../assets/img/Zanahorias Orgánicas.jpg';
import zanahoriasOrganicas2 from '../assets/img/ZanahoriasOrganicas2.jpg';
import zanahoriasOrganicas3 from '../assets/img/ZanahoriasOrganicas3.jpg';
import espinacasFrescas from '../assets/img/Espinacas frescas.jpg';
import espinacasFrescas2 from '../assets/img/Espinacas frescas2.jpg';
import espinacasFrescas3 from '../assets/img/Espinacas frescas3.jpg';
import pimientosTricolores from '../assets/img/Pimientos Tricolores.jpg';
import pimientosTricolores2 from '../assets/img/pimiento-tricolor2.jpg';
import pimientosTricolores3 from '../assets/img/pimiento-tricolor3.jpg';
import mielOrganica from '../assets/img/miel organica.jpg';
import mielOrganica2 from '../assets/img/miel organica2.jpg';
import mielOrganica3 from '../assets/img/miel organica3.jpg';
import kiwi from '../assets/img/KIWI.jpg';
import kiwi2 from '../assets/img/kiwi2.jpg';
import kiwi3 from '../assets/img/kiwi3.jpg';

const productos = [
  {
    slug: 'manzana-fuji',
    nombre: 'Manzanas Fuji',
    precio: 1200,
    descripcion: 'Manzanas Fuji crujientes y dulces.',
    imagen: manzanaFuji,
    imagenes: [manzanaFuji, manzanaFuji2, manzanaFuji3],
    diponible: true,
    categoria: "fruta"
  },
  {
    slug: 'naranjas-valencia',
    nombre: 'Naranjas Valencia',
    precio: 1000,
    descripcion: 'Jugosas y ricas en vitamina C.',
    imagen: naranjasValencia,
    imagenes: [naranjasValencia, naranjasValencia2, naranjasValencia3],
    diponible: true,
    categoria: "fruta"
  },
  {
    slug: 'platanos-cavendish',
    nombre: 'Plátanos Cavendish',
    precio: 800,
    descripcion: 'Maduros y dulces.',
    imagen: platanosCavendish,
    imagenes: [platanosCavendish, platanosCavendish2, platanosCavendish3],
    diponible: false,
    categoria: "fruta"
  },
  {
    slug: 'zanahorias-organicas',
    nombre: 'Zanahorias Orgánicas',
    precio: 900,
    descripcion: 'Crujientes cultivadas sin pesticidas.',
    imagen: zanahoriasOrganicas,
    imagenes: [zanahoriasOrganicas, zanahoriasOrganicas2, zanahoriasOrganicas3],
    diponible: true,
    categoria: "verdura"
  },
  {
    slug: 'espinacas-frescas',
    nombre: 'Espinacas Frescas',
    precio: 700,
    descripcion: 'Frescas y nutritivas.',
    imagen: espinacasFrescas,
    imagenes: [espinacasFrescas, espinacasFrescas2, espinacasFrescas3],
    diponible: true,  
    categoria: "verdura"
  },
  {
    slug: 'pimientos-tricolores',
    nombre: 'Pimientos Tricolores',
    precio: 1500,
    descripcion: 'Ideales para salteados.',
    imagen: pimientosTricolores,
    imagenes: [pimientosTricolores, pimientosTricolores2, pimientosTricolores3],
    diponible: false,
    categoria: "verdura"
  },
  {
    slug: 'miel-organica',
    nombre: 'Miel Orgánica',
    precio: 5000,
    descripcion: 'Pura y orgánica.',
    imagen: mielOrganica,
    imagenes: [mielOrganica, mielOrganica2, mielOrganica3],
    diponible: true,
    categoria: "organico"
  },
  {
    slug: 'kiwi',
    nombre: 'Kiwi',
    precio: 1000,
    descripcion: 'Dulces y jugosos.',
    imagen: kiwi,
    imagenes: [kiwi, kiwi2, kiwi3],
    diponible: true,
    categoria: "fruta"
  }
];

export default productos;
