import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoHuerto from "../assets/img/logo-huerto.png";
import Footer from "../components/Footer"; // 👈 importar Footer

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    let errores = [];

    if (!email.trim()) {
      errores.push("El correo electrónico es obligatorio.");
    } else if (!emailRegex.test(email)) {
      errores.push("El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.");
    } else if (email.length > 100) {
      errores.push("El correo debe tener como máximo 100 caracteres.");
    }

    if (!password.trim()) {
      errores.push("La contraseña es obligatoria.");
    } else if (password.length < 4) {
      errores.push("La contraseña debe tener al menos 4 caracteres.");
    } else if (password.length > 10) {
      errores.push("La contraseña debe tener como máximo 10 caracteres.");
    }

    if (errores.length > 0) {
      alert("Corrige los siguientes errores:\n\n" + errores.join("\n"));
    } else {
      alert("Datos correctos. Inicio de sesión exitoso.");
      navigate("/perfil");
    }
  };

  return (
    <>
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-5">
                <img src={logoHuerto} alt="logo" width="250" />
              </div>

              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Iniciar sesión</h1>

                  <form
                    onSubmit={handleSubmit}
                    className="needs-validation"
                    noValidate
                    autoComplete="off"
                  >
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="email">
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoFocus
                      />
                    </div>

                    <div className="mb-3">
                      <div className="mb-2 w-100 d-flex justify-content-between">
                        <label className="text-muted" htmlFor="password">
                          Contraseña
                        </label>
                        <a href="/forgot" className="float-end">
                          ¿Olvidaste la contraseña?
                        </a>
                      </div>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="remember"
                          id="remember"
                          className="form-check-input"
                        />
                        <label htmlFor="remember" className="form-check-label">
                          Recuérdame
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary ms-auto">
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                </div>

                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    ¿No tienes una cuenta?{" "}
                    <a href="/registro" className="text-dark">
                      Crea una aquí
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </>
  );
}

export default Login;
