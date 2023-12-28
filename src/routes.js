import { BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

console.log(window.location);

//const pagina = window.location.pathname === '/' ? <Inicio/> : <SobreMim/>

function AppRoutes() {
  return(
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>} />
          <Route path="sobremim" element={<SobreMim/>} />
        </Route>
       
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes;
