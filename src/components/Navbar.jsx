import React from "react";
import { menuSVG, shopSVG } from "../../public/svg";
const Navbar = () => {
  return (
    <div className="flex px-12 pt-8 justify-between">
      <div>
        <img src={shopSVG} alt="shopSVG" />
      </div>
      <div>
        <img src={menuSVG} alt="menuSVG" />
      </div>
    </div>
  );
};

export default Navbar;
