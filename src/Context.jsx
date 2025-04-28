import React, { createContext, useState } from "react";

export const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [openProductId, setOpenProductId] = useState(null); // Track the open popup by product ID

  return (
    <SharedContext.Provider
      value={{
        cart,
        setCart,
        openProductId,
        setOpenProductId,
      }}
    >
      {children}
    </SharedContext.Provider>
  );
};