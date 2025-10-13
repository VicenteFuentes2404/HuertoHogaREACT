import React from "react";
import logoHuerto from "../assets/img/logo-huerto.png";

function Login() {
  return (
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
                  id="loginForm"
                  method="POST"
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
                      name="email"
                      required
                      autoFocus
                    />
                    <div className="invalid-feedback">
                      El correo electrónico no es válido
                    </div>
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
                      name="password"
                      required
                    />
                    <div className="invalid-feedback">
                      La contraseña es requerida
                    </div>
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
  );
}

export default Login;
