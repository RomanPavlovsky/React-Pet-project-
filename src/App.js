import React from "react";
import { Routes, Route } from "react-router-dom";
import style from "./App.scss";

//components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

//Pages
import NotFound404 from "./pages/NotFound404";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Favorites" element={<Favorites />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
