// src/pages/Nosotros.jsx
import React from "react";
import "../assets/css/style.css";

function Nosotros() {
  return (
    <main>
      <div className="text-center mt-4 mb-4">
        <h1>Nosotros</h1>
      </div>

      <section>
        <article>
          <div className="card m-5 p-5 fondo-imagen">
            {/* Card vacía con banner de fondo definido en CSS */}
          </div>
        </article>
      </section>

      {/* Bloque con 3 columnas */}
      <div className="container text-center my-5">
        <div className="row">
          <div className="col">
            <h3>¿Quiénes Somos?</h3>
            <p className="text-justify">
              HuertoHogar es una tienda online dedicada a llevar la frescura y calidad de los productos del campo
              directamente a la puerta de nuestros clientes en Chile. Con más de 6 años de experiencia, operamos
              en más de 9 puntos a lo largo del país, incluyendo ciudades clave como Santiago, Puerto Montt,
              Villarica, Nacimiento, Viña del Mar, Valparaíso, y Concepción. Nuestra misión es conectar a las
              familias chilenas con el campo, promoviendo un estilo de vida saludable y sostenible.
            </p>
          </div>

          <div className="col mx-3">
            <h3>Misión</h3>
            <p className="text-justify">
              Nuestra misión es proporcionar productos frescos y de calidad directamente desde el campo hasta
              la puerta de nuestros clientes, garantizando la frescura y el sabor en cada entrega. Nos
              comprometemos a fomentar una conexión más cercana entre los consumidores y los agricultores
              locales, apoyando prácticas agrícolas sostenibles y promoviendo una alimentación saludable en
              todos los hogares chilenos.
            </p>
          </div>

          <div className="col mx-3">
            <h3>Visión</h3>
            <p className="text-justify">
              Nuestra visión es ser la tienda online líder en la distribución de productos frescos y naturales en
              Chile, reconocida por nuestra calidad excepcional, servicio al cliente y compromiso con la
              sostenibilidad. Aspiramos a expandir nuestra presencia a nivel nacional e internacional,
              estableciendo un nuevo estándar en la distribución de productos agrícolas directos del productor al
              consumidor.
            </p>
          </div>
        </div>
      </div>

      {/* Sección Tiendas */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Nuestras Tiendas en Chile</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <h5 className="text-center">Santiago</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.650125469258!2d-70.669265!3d-33.448889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c59c3f0cc7c9%3A0xebb0b!2sSantiago!5e0!3m2!1ses!2scl!4v1700000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Santiago"
            ></iframe>
          </div>

          <div className="col-md-6">
            <h5 className="text-center">Puerto Montt</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.871949608501!2d-72.9411!3d-41.4689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9619ff3adad67c91%3A0x7f6!2sPuerto%20Montt!5e0!3m2!1ses!2scl!4v1700000000001"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Puerto Montt"
            ></iframe>
          </div>

          {/* Puedes seguir agregando las demás ciudades igual */}
        </div>
      </section>

      {/* Sección Desarrolladores */}
      <section className="container my-5">
        <div className="text-center">
          <h4 className="fw-bold">Desarrolladores</h4>
          <p>Marcela Mena, Camila Gutiérrez y Vicente Fuentes</p>
        </div>
      </section>
    </main>
  );
}

export default Nosotros;
