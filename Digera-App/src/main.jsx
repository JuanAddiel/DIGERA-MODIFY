import React from "react";
import ReactDOM from "react-dom/client";
import "animate.css";
import "./styles/style.css";
import "./styles/index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./helpers/store";
import { router } from "./utils/route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>  
      <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>
);
