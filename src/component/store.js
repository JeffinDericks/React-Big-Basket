import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

const Store=configureStore({
    reducer:{
        key:slice
    }
}
)

export default Store