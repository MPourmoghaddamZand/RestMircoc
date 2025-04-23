import React, { createContext, useState } from 'react';
export const SharedContext = createContext();
export const SharedProvider = ({ children }) => {
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [shopCount, setShopCount] = useState(0);
  return (
    <SharedContext.Provider value={{ 
      popUpIsOpen, setPopUpIsOpen ,
      shopCount, setShopCount,
     }}>
      {children}
    </SharedContext.Provider>
  );
};