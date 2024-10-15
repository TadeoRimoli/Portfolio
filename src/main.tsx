import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Provider from "./i18n/Provider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <App />
  </Provider>
);
