import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";
import ProductList from "./components/ProductList";
const App = () => {
  return (
    <div className="w-full h-screen bg-bg-color overflow-x-hidden font-Pinar-medium relative">
      <Navbar />
      <Hero />
      <Searchbar />
      <ProductList />
      <div className="h-[1000px]"></div>
    </div>
  );
};

export default App;
