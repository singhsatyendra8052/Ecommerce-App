import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories";
import FeatureCard from "../../components/FeatureCard";
import Hero from "../../components/Hero";
import ProductCard from "../../components/ProductCard";
import Products from "../../components/ProductCard";
import CarouselDefault from "../../test";
import { UserContext } from "../../components/context/userContext";
import { useContext } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);
  const { userdetails } = useContext(UserContext);
  // console.log(userdetails);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {/* <Hero /> */}
      <CarouselDefault />
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div className="text-3xl flex flex-row justify-center items-center">
          Loading.....
        </div>
      )}
      <Products />
    </>
  );
};

export default Home;
