import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../Redux/TodoSlice";

const store = configureStore({
    reducer: {
        todo: TodoSlice
    }
})
export default store