import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const ProductCard = ({ products = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  console.log(id, "id", product);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, []);
  const handleSubmit = async (product) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/cart/add",
        {
          product: product,
          quantity: 1, // Or any desired quantity
        },
        {
          withCredentials: true,
        }
      );

      console.log("Product added to cart:", response.data);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert(
        "There was an error adding the product to your cart. Please try again."
      );
    }
  };

  const handleCart = (product, redirect) => {
    console.log(product);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    alert("Product added to cart");
    if (redirect) {
      navigate("/cart");
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            console.log(product, "product");
            const { id, title, price, description, category, image } = product;
            const trimmedTitle = title.split(" ").slice(0, 7).join(" ");
            return (
              <Link
                to={`/products/${id}`}
                className=" relative lg:w-[23%] md:w-1/2 p-4 w-full mb-4 cursor-pointer rounded-lg shadow ml-4 transition-transform transform hover:scale-105"
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={title}
                    className=" object-cox align-text-bottomntain object-center w-full h-full block"
                    src={image}
                  />
                </a>
                <div className="mt-4">
                  <div className="flex flex-row justify-between">
                    <h3 className="text-gray-500 tracking-widest title-font mb-1 uppercase">
                      {category}
                    </h3>
                    <p className="mb-1 text-md font-semibold">${price}</p>
                  </div>
                  <h2 className=" relative text-gray-900 title-font text-lg font-medium mb-10">
                    {trimmedTitle}
                  </h2>

                  <div className=" flex   absolute inset-x-0 bottom-0 mb-3">
                    <button
                      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mr-2"
                      onClick={() => handleCart(product, true)}
                    >
                      Buy it now
                    </button>
                    <button
                      className="flex ml-auto border border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded"
                      onClick={() => {
                        handleCart(product);
                        handleSubmit(product);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
