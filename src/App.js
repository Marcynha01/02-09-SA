import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./components/Principal";
import Almoco from "./Paginas/Cardapio";
import Comunicados from "./Paginas/Comunicado/comunicados";
import Doces from "./Paginas/Cardapio";
import Eventos from "./Paginas/Eventos/evetos";
import Jantar from "./components/Jantar/jantar";
import QuemSomos from "./Paginas/QuemSomos/quemsomos";
// import Salgados from "./components/Salgados/salgado";
import menu from "./components/Indexhome/menu";

import { Salgados, Doces, Jantar, Almoco }  from "./Paginas";


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
      <div>teste</div>
      <Route path="/cardapio/Salgados" exact component={<Salgados/>}/>
      <Route path="/cardapio/Doces" exact component={<Doces/>}/>
      <Route path="/cardapio/jantar" exact component={<Jantar/>}/>
      <Route path="/cardapio/Almoco" exact component={<Almoco/>}/>
      <Route path="/cardapio/eventos" exact component={<Eventos/>}/>

        {/* <Route element={<Principal />} path={"/"} exact />
        <Route element={<Doces />} path={"/Doces"} />
        <Route element={<Salgados />} path={"/Salgados"} />
        <Route element={<Almoço />} path={"/Almoco"} />
        <Route element={<Jantar />} path={"/Jantar"} />
        <Route element={<Eventos />} path={"/Eventos"} />
        <Route element={<Comunicados />} path={"/Comunicados"} />
        <Route element={<QuemSomos />} path={"/QuemSomos"} /> */}
      </Routes>
    </BrowserRouter>

  );
};
export default App;
