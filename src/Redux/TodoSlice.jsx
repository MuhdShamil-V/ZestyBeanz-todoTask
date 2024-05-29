import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        data:[]
    },
    reducers: {
        add: (state, action) => {
            state.data = [...state.data, {id: Date.now(), name: action.payload.name}]
        }
    }
})

export const { add } = TodoSlice.actions;
export default TodoSlice.reducer