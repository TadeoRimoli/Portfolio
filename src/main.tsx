import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Provider from "./i18n/Provider.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotelSystem from "./Views/HotelSystem.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hotelsystem" element={<HotelSystem />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
