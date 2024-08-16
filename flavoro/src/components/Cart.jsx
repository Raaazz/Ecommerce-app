import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const totalPrice = cartItems.reduce((totalPrice, item) => {
    console.log(item);
    return totalPrice + item.qty * item.foodPrice;
  }, 0);

  useEffect(() => {
    console.log(cartItems);
    scrollToBottom();
  }, [cartItems]);
  return (
    <>
      <div
        className={`fixed right-0 p-4 top-0 lg:w-[20vw] w-full bg-white h-screen  shadow-md ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 ease-in-out`}
      >
        <div className="relative max-h-screen overflow-y-scroll">
          <div className="flex items-center justify-between my-3 ">
            <span className="text-xl">My Order</span>
            <IoMdClose
              className="text-red-600 font-bold text-xl rounded-[4px] hover:scale-110 cursor-pointer"
              onClick={() => setActiveCart(!activeCart)}
            />
          </div>
          <div className="flex flex-col gap-4 mb-40">
            {cartItems.length > 0 ? (
              cartItems.map((food) => {
                return (
                  <ItemCart
                    key={food.id}
                    id={food.id}
                    name={food.foodName}
                    price={food.foodPrice}
                    img={food.img}
                    qty={food.qty}
                  />
                );
              })
            ) : (
              <h2 className="text-center text-xl font-bold text-gray-800">
                Cart is empty
              </h2>
            )}
            <div ref={messagesEndRef}></div>
          </div>

          <div className="fixed bottom-0">
            <div className="pb-4 bg-white z-50">
              <h3 className="font-semibold text-gray-800">Items :{totalQty}</h3>
              <h3 className="font-semibold text-gray-800">
                Total amount : {Number(totalPrice)}
              </h3>
              <hr className="w-[90vw] lg:w-[18vw] my-2" />
              <button
                className="bg-green-500  rounded-[4px] lg:w-[18vw] w-[90vw] font-bold px-3 py-2 text-white hover:bg-green-400"
                onClick={() => navigate("/success")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <FaShoppingCart
        className={`text-4xl text-gray-600 fixed bottom-4 bg-white p-1 rounded-full right-1 lg:right-10 hover:text-green-500 transition-all ease-in cursor-pointer ${
          totalQty > 0 && "animate-bounce delay-500 transition-all duration-500"
        }`}
        onClick={() => setActiveCart(!activeCart)}
      />
    </>
  );
};

export default Cart;
