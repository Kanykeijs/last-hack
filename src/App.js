import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContext";
import ProductContextProvider from "./context/AuthHelp";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </AuthContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
  );
};

export default App;
