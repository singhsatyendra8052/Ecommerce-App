import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./modules/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";
import Login from "./components/login/Login";
import SignUp from "./components/signup/Signup";
import { CarouselDefault } from "./test";
import { UserContextProvider } from "./components/context/userContext";
function App() {
  return (
    <div>
      {/* <CarouselDefault /> */}
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories/:name" element={<CategoryProducts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="*"
            element={
              <div className="h-[50vh] text-4xl text-bold flex flex-row justify-center items-center">
                404 not found{" "}
              </div>
            }
          />
        </Routes>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
