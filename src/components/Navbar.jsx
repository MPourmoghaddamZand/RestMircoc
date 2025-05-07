import React, { useContext } from "react";
import { menuSVG, shopSVG } from "../../public/svg";
import { SharedContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";
import Button from "./util/Button";

const Navbar = () => {
  const { cart } = useContext(SharedContext)
  const totalItems = Object.values(cart).reduce((acc, val) => acc + val, 0);
  return (
    <nav className="fixed bg-bg-color w-full z-50">
      <div className="flex px-12 py-8 justify-between">
        <Link to={'/cart'}>
          <div className="relative">
            <img src={shopSVG} color="black" alt="shopSVG" />
            {totalItems > 0 &&
              <div className="absolute -right-2 -top-1 flex justify-center items-center w-4 h-4 bg-primary rounded-full">
                <p className="text-[10px] text-white">{totalItems}</p>
              </div>
            }
          </div>
        </Link>
        <div>
          <img src={menuSVG} alt="menuSVG" />
        </div>
      </div>
      {totalItems > 0 &&
        <div className="fixed bottom-0 left-1/2 py-10 -translate-x-1/2 w-10/12">
          <Link to={'/cart'}>
            <Button text={"مشاهده سبد خرید"} className={'p-10 text-xl rounded-[20px] drop-shadow-2xl'} />
          </Link>
        </div>
      }
    </nav>
  );
};

export default Navbar;
