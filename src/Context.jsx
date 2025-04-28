import React, { createContext, useState } from 'react';
export const SharedContext = createContext();
export const SharedProvider = ({ children }) => {
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [cart, setCart] = useState({});
  return (
    <SharedContext.Provider value={{ popUpIsOpen, setPopUpIsOpen, cart, setCart }}>
      {children}
    </SharedContext.Provider>
  );
};