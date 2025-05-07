import React from "react";

const CatStyle = ({ svg, text }) => {
  return (
    <div className="flex gap-2 justify-center items-center px-8 py-2 bg-white rounded-full drop-shadow-lg ">
      <img className="fill-black" src={svg} alt="" />
      <h2>{text}</h2>
    </div>
  );
};

export default CatStyle;
