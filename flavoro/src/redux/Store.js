import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import CategorySlice from "./CategorySlice";
import SearchSlice from "./SearchSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
  },
});
export default Store;
