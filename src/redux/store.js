import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./slicer/contentSlicer";

export const store = configureStore({
   reducer:{
    contentlist:contentReducer
   }

})