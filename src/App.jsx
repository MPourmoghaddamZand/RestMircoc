import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";
import ProductBox from "./components/ProductBox";
import ProductList from "./components/ProductList";
import InfoProduct from "./components/InfoProduct";
import { badamzamini } from "../public/product";
import { SharedContext, SharedProvider } from "./Context";

const App = () => {
  const { popUpIsOpen, setPopUpIsOpen } = useContext(SharedContext);
  return (
    <div className="w-full h-screen bg-bg-color overflow-x-hidden font-Pinar-medium relative">
      <Navbar />
      <Hero />
      <Searchbar />
      <ProductList />
      {popUpIsOpen && (
        <InfoProduct
          img={badamzamini}
          info={"قارچ نون ، پنیر ، گوجه ، خیار سبزی"}
          title={"بادام هندی"}
          price={"180,000"}
        />
      )}
      <div className="h-[1000px]"></div>
    </div>
  );
};

export default App;
