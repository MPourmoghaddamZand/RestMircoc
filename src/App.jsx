import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";
import ProductList from "./components/ProductList";
import Categorys from "./components/Categorys";
import Cat from "./components/Cat";
const App = () => {
  return (
    <div className="w-full h-screen bg-bg-color overflow-x-hidden font-Pinar-medium relative">
      <Navbar />
      <Hero />
      {/* <Searchbar /> */}
      {/* <Categorys /> */}
      <Cat/>
      <ProductList />
      <div className="h-[1000px]"></div>
    </div>
  );
};

export default App;
