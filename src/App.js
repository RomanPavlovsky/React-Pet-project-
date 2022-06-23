import React, { useState } from "react";
import style from "./app.module.scss";
import { Route, Routes } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

//Pages
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";

export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={style.wrapper}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
