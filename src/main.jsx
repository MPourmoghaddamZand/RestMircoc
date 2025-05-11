import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SharedContext, SharedProvider } from "./Context.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopCart from "./components/ShopCart.jsx";
import Admin from "./admin/Admin.jsx";
import AddProduct from "./admin/AddProduct.jsx";
import EditProduct from "./admin/EditProduct.jsx";
import AdminProduct from "./admin/AdminProduct.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SharedProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/addproduct" element={<AddProduct />} />
          <Route path="/admin/editproduct" element={<EditProduct />} />
          <Route path="/admin/product" element={<AdminProduct />} />
        </Routes>
      </BrowserRouter>
    </SharedProvider>
  </StrictMode>
);
