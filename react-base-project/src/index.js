import React from "react";
import { createRoot } from "react-dom/client";

import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Projetos from "./pages/Projetos";
import SobreNos from "./pages/SobreNos";
import ProjetoDetalhes from "./pages/ProjetoDetalhes";

const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user)=> {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Projetos/>} />
        <Route path="/projetos" element={<Projetos/>} />
        <Route path="/projeto/:slug" element={<ProjetoDetalhes/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/sobre-nos" element={<SobreNos/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
