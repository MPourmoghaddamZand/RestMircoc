import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SharedContext, SharedProvider } from "./Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SharedProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<ShopCart />} />
        </Routes>
      </BrowserRouter>
      <App />
    </SharedProvider>
  </StrictMode>
);
