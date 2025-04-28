import React, { createContext, useState } from 'react';
export const SharedContext = createContext();
export const SharedProvider = ({ children }) => {
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  return (
    <SharedContext.Provider value={{ popUpIsOpen, setPopUpIsOpen }}>
      {children}
    </SharedContext.Provider>
  );
};