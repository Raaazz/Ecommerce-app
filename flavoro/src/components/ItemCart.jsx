import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
import { incrementQty } from "../redux/CartSlice";
import { decrementQty } from "../redux/CartSlice";
import toast from "react-hot-toast";

const ItemCart = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  function reduceQuantity() {
    if (qty === 1) {
      dispatch(removeFromCart({ id }));
    }
    dispatch(decrementQty({ id, name, img, price, qty }));
  }
  return (
    <div className="flex gap-2.5 shadow-md rounded-[4px] p-2  mb-3">
      <img src={img} alt="fooditem" className="w-[50px] h-[50px]" />
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h2 className="font-bold text-gray-800">{name}</h2>
          <MdDelete
            className="text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear"
            onClick={() => {
              dispatch(removeFromCart({ id, name, price, qty, img }));
              toast(`${name} Removed`, {
                icon: "👋",
              });
            }}
          />
        </div>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold"> ₹ {price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FaPlus
              className="text-gray-600 hover:text-green-500 p-1 text-xl transition-all ease-linear cursor-pointer"
              onClick={() =>
                dispatch(incrementQty({ id, name, price, qty, img }))
              }
            />
            <span>{qty}</span>
            <FaMinus
              className="text-gray-600 hover:text-green-500 p-1 text-xl transition-all ease-linear cursor-pointer"
              onClick={reduceQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
