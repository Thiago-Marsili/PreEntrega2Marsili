import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ShowCards from "./components/ShowCards";
import Error from "./components/Error";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.css"

function App(){
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<div><NavBar/><ItemListContainer greeting={"Bienvenido"}/><ShowCards Catalogo=""/></div>}/>
              <Route path="/categorias/1" element={<div><NavBar/><ShowCards Catalogo="animada"/></div>}/>
              <Route path="/categorias/2" element={<div><NavBar/><ShowCards Catalogo="accion"/></div>}/>
              <Route path="/categorias/3" element={<div><NavBar/><ShowCards Catalogo="simulacion"/></div>}/>
              <Route path="/categorias/4" element={<div><NavBar/><ShowCards Catalogo="comedia"/></div>}/>
              <Route path="/item/1" element={<div><NavBar/><ItemDetailContainer idi="1"/></div>}/>
              <Route path="/item/2" element={<div><NavBar/><ItemDetailContainer idi="2"/></div>}/>
              <Route path="/item/3" element={<div><NavBar/><ItemDetailContainer idi="3"/></div>}/>
              <Route path="/item/4" element={<div><NavBar/><ItemDetailContainer idi="4"/></div>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
      </BrowserRouter>

  )
}
export default App;

