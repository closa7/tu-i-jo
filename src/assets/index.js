import React from "react";
import ReactDOM from "react-dom/client"; // Usamos ReactDOM de la nueva versión
import App from "./App"; // Importamos el componente App
import "./style.css"; // Asegúrate de que el CSS esté siendo importado

// Creamos el root element donde renderizar la app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizamos el componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
