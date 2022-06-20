import React from "react";
import { Routes, Route } from "react-router-dom";
import style from "./App.scss";
import Header from "./components/Header/Header";

//Pages
import NotFound404 from "./pages/NotFound404";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Favorites" element={<Favorites />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
