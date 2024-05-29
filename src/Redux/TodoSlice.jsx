import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        data: []
    },
    reducers: {
        add: (state, action) => {
            state.data.push({ id: Date.now(), name: action.payload.name, completed: false });
        },
        remove: (state, action) => {
            state.data = state.data.filter(task => task.id !== action.payload);
        },
        update: (state, action) => {
            const {id, name} = action.payload
            state.data = state.data.map((item) => {
                if(item.id === id) {
                    return({...item, name})
                }
                return item
            })
        },
        toggleComplete: (state, action) => {
            const task = state.data.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        }
    }
});

export const { add, remove, update, toggleComplete } = TodoSlice.actions;
export default TodoSlice.reducer;
