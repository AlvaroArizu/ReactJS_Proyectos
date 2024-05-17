import Home from "../Pages/Home.jsx";
import Detalle from "../Pages/Detalle.jsx";
import Login from "../Pages/Login.jsx";
import Registro from "../Pages/Registro.jsx";
import { Route, Routes } from "react-router-dom";
import NotFound from "../Pages/NotFound.jsx";
function Public() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingresar" element={<Login />} />
        <Route path="/alta" element={<Registro />} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Public;
