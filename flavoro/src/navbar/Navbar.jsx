import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/SearchSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex lg:items-center lg:flex-row flex-col gap-2.5 justify-between mx-6 py-3">
      <div className="flex flex-col gap-2.5">
        <h3 className="font-bold text-2xl text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Flavoro Foods</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Here..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="outline-none p-3 text-sm rounded-[4px] border-gray-400 border w-full lg:w-[18vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
