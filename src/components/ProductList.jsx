import React, { useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import axios from "axios";

const ProductList = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
    axios.get("http://localhost:5000/api/menu")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <div className="flex justify-center px-6 gap-1">
      <div className="w-full mx-auto flex flex-col gap-14 justify-center">
        {categories.map((cat) => (
          <div key={cat.id}>
            <h2
              id={cat.category}
              className="text-right mb-10 scroll-mt-[200px]"
            >
              {cat.title}
            </h2>
            {/* {console.log(`Category ID: ${cat.category}`)} */}
            <div className="flex flex-col gap-10">
              {products
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
