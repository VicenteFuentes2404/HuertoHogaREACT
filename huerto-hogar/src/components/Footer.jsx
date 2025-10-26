import React, { useState } from "react";
// No es necesario importar React dos veces

const Footer = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [colorMensaje, setColorMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const regexEmail = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

    if (!regexEmail.test(email)) {
      setMensaje(
        "Por favor ingresa un correo válido (@duoc.cl, @profesor.duoc.cl o @gmail.com)."
      );
      setColorMensaje("text-danger");
    } else if (email.length > 100) {
      setMensaje("El correo no puede tener más de 100 caracteres.");
      setColorMensaje("text-danger");
    } else {
      setMensaje("¡Gracias por suscribirte al boletín!");
      setColorMensaje("text-success");
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      {/* Enlaces */}
      <div className="footer-enlaces">
        <a href="#">
          Frutas
        </a>
        |
        <a href="#">
          Verduras
        </a>
        |
        <a href="#">
          Orgánicos
        </a>
      </div>

      {/* Formulario */}
      <div className="footer-formulario">
        <form
          id="formBoletin"
          onSubmit={handleSubmit}
          className="d-flex align-items-center justify-content-center flex-wrap gap-2"
        >
          <label htmlFor="emailBoletin" className="mb-0 me-2 text-white">
            Suscríbete al boletín:
          </label>

          <input
            type="email"
            id="emailBoletin"
            placeholder="Tu correo"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control rounded-3"
            style={{ width: 360, maxWidth: "80vw" }}
          />

          <button type="submit" className="btn btn-light border border-dark">
            Suscribirse
          </button>
        </form>

        {mensaje && (
          <p id="mensajeSuscripcion" className={`mensaje mt-2 ${colorMensaje} text-center`}>
            {mensaje}
          </p>
        )}
      </div>


      <p className="copy mb-0">© 2025 Huerto Hogar</p>
    </footer>
  );
};

// Exportamos el componente real, no el mock
export default Footer;

// La función duplicada que causaba el error ha sido eliminada.