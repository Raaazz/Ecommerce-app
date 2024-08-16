import React from "react";
import { CiStar } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const FoodCard = ({
  id,
  img,
  foodName,
  foodPrice,
  foodDesc,
  rating,
  handleToast,
}) => {
  const dispatch = useDispatch();
  return (
    <div className=" font-bold w-[300px]  bg-white p-5 flex flex-col gap-2.5 rounded-[4px] mb-3">
      <img
        src={img}
        alt="food"
        className="w-auto h-[200px] object-contain hover:scale-110 cursor-grab transition-all duration-500 ease-in-out mix-blend-multiply bg-white"
      />
      <div className="flex  text-sm items-center justify-between gap-2.5 mt-2.5">
        <h2 className="truncate">{foodName}</h2>
        <span className="text-green-500 text-nowrap">₹ {foodPrice}</span>
      </div>
      <p>{foodDesc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex items-center justify-center gap-1">
          <CiStar className="mr-1 text-yellow-500" />
          {rating}
        </span>
        <button
          className="px-2 py-1 bg-green-500 text-white rounded-[4px]"
          onClick={() => {
            dispatch(
              addToCart({ id, img, foodName, foodPrice, rating, qty: 1 })
            );
            handleToast(foodName);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
