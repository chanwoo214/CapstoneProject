import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./clientReducer";


const store = configureStore({
  reducer: {
    client: clientReducer,
  },
});
export default store;
