import React from "react";
import ProductBox from "./ProductBox";
import menuData from "../data/menu.json";
import categoryData from "../data/category.json";

const ProductList = () => {
  return (
    <div className="flex justify-center px-6 gap-1">
      <div className="w-full mx-auto flex flex-col gap-14 justify-center">
        {categoryData.map((cat) => (
          <div key={cat.id}>
            <h2
              id={cat.category}
              className="text-right mb-10 scroll-mt-[200px]"
            >
              {cat.title}
            </h2>
            {console.log(`Category ID: ${cat.category}`)}
            <div className="flex flex-col gap-10">
              {menuData
                .filter((item) => item.category === cat.category)
                .map((item) => (
                  <ProductBox item={item} key={item.id} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
