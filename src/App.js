import React from "react";
import {Routes, Route} from "react-router-dom"
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import Searchpage from "./Components/Searchpage/Searchpage";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path = "/" element = {<MainPage />} />
        <Route path = "/search-page" element = {<Searchpage />}/>
        <Route path = "/product-detail" element = {<ProductDetail />}/>
      </Routes>
        
    </div>
  );
}

export default App;
