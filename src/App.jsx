import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Especialidades from "./pages/Especialidades";
import Grupos from "./pages/Grupos";
import Reservas from "./pages/Reservas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Ajuste o caminho conforme sua estrutura
import Burgers from "./pages/Burgers";
import Acompanhamentos from "./pages/Acompanhamentos";
import Drinks from "./pages/Drinks";
import Desserts from "./pages/Desserts";

const App = () => {
  return (
    <BrowserRouter scrollRestoration="manual">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/especialidades" element={<Especialidades />}></Route>
        <Route path="/grupos" element={<Grupos />}></Route>
        <Route path="/reservas" element={<Reservas />}></Route>
        <Route path="/burgers" element={<Burgers />}></Route>
        <Route path="/acompanhamentos" element={<Acompanhamentos />}></Route>
        <Route path="/drinks" element={<Drinks />}></Route>
        <Route path="/sobremesa" element={<Desserts />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
