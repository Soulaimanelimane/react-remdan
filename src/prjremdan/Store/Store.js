import { configureStore } from "@reduxjs/toolkit";
import { RemdanSlices } from "../Slice/Slices";

export const  Store = configureStore({
    reducer:{
        donnee:RemdanSlices.reducer
    },
})