import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import Finalcart from "./pages/Finalcart";
// 1) definir rutas con react router dom:
// una para el inicio, otra para el login, otra para el carrito
// 2) crear una store global con zustand, al clickear un producto se agrega al carrito
// 3) consumir esta store en la página del carrito

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/carrito"
            element={
              <MainLayout>
                <Cart />
              </MainLayout>
            }
          />
          <Route
            path="/finalcart"
            element={
              <MainLayout>
                <Finalcart />
              </MainLayout>
            }
          />
          <Route
            path="/registro"
            element={
              <MainLayout>
                <Registro />
              </MainLayout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <>
                <h1>Página no encontrada</h1>
                <Link to={"/"}>Ir al inicio.</Link>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
