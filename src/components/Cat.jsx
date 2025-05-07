import React from "react";
import CatStyle from "./util/CatStyle";
import { burgerSVG, drinkSVG, pizzaSVG, sandwichSVG } from "../../public/svg";

const categoryList = {
  پیتزا: pizzaSVG,
  ساندویچ: sandwichSVG,
  برگر: burgerSVG,
  نوشیدنی: drinkSVG,
};
const Cat = () => {
  return (
    <div className="flex mt-8 mb-12 mx-5 gap-2">
      {Object.keys(categoryList).map((key) => {
        return <CatStyle text={key} svg={categoryList[key]} />;
      })}
    </div>
  );
};

export default Cat;
