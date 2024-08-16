import React, { useEffect, useState } from "react";
import FoodData from "../foodData/FoodData.js";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/CategorySlice.jsx";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mx-6">
      <h3 className="text-xl font-semibold text-gray-500 ">
        Find the best food
      </h3>
      <div className="flex items-center gap-2.5 my-5 lg:overflow-x-hidden overflow-x-scroll py-1">
        <button
          className={`px-2 py-1 rounded-[4px] bg-gray-200 hover:bg-green-500 hover:text-white transition-all ease-in duration-300 font-bold ${
            selectedCategory === "All" && "bg-green-400 text-white"
          }`}
          onClick={() => dispatch(setCategory("All"))}
        >
          {"All"}
        </button>

        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className={`px-2 py-1 rounded-[4px] bg-gray-200 hover:bg-green-500 hover:text-white transition-all ease-in duration-300 font-bold ${
                selectedCategory === category && "bg-green-400 text-white"
              }`}
              onClick={() => dispatch(setCategory(category))}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
