import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [delPopup, setDelPopup] = useState(0);

    return (
        <AdminContext.Provider value={{ delPopup, setDelPopup }}>
            {children}
        </AdminContext.Provider>
    );
};
