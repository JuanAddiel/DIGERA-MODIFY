export const App = () => {
  return (
    <section className="vh-100 image-opacity ">
      <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto">
            <div
              className="card shadow-2-strong border-0 p-4 animate__animated animate__fadeInDown "
              style={{ borderRadius: "1.5rem" }} // Utiliza un objeto para el estilo
            >
              <div className="card-body p-5 text-center bg-white animate__animated animate__zoomIn">
                <img
                  className="mb-5 img-fluid"
                  width="200"
                  height="90"
                  src="logo-desktop.png"
                />
                <form className="">
                  <div className="row justify-content-center">
                    <div className="col-md-11 animate__animated animate__zoomIn">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="floatingInput"
                          placeholder="Username"
                        />
                        <label htmlFor="floatingInput">Username</label>{" "}
                        {/* Usa htmlFor en lugar de for */}
                      </div>
                    </div>
                    <div className="col-md-11 m-3 animate__animated animate__zoomIn">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>{" "}
                        {/* Usa htmlFor en lugar de for */}
                      </div>
                    </div>
                    <div className="col-md-11 animate__animated animate__zoomIn">
                      <div className="form-check text-start my-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="remember-me"
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Remember me
                        </label>{" "}
                        {/* Usa htmlFor en lugar de for */}
                      </div>
                    </div>
                    <div className="col-md-11">
                      <button
                        className="btn btn-success w-100 py-2 animate__animated animate__zoomIn"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
