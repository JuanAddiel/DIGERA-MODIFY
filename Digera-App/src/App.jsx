import { Buttons } from "./components/Buttons";
import { CheckBox } from "./components/CheckBox";
import { Inputs } from "./components/Inputs";

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
                    <Inputs
                      animated={"animate__animated animate__zoomIn"}
                      id={"user"}
                      type={"text"}
                      htmlFor={"user"}
                      placeholder={"Username"}
                      showLabel={"Username"}
                    />
                    <Inputs
                      animated={"animate__animated animate__zoomIn"}
                      id={"password"}
                      type={"password"}
                      htmlFor={"password"}
                      placeholder={"Password"}
                      showLabel={"Password"}
                    />
                    <CheckBox 
                    animated={"animate__animated animate__zoomIn"}
                    id={"checkbox"}
                    showLabel={"Remember me"}
                    type={"checkbox"}
                    value={"remember-me"}
                    />
                    <Buttons text="Send" />
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
