import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: JSON.parse(localStorage.getItem('todo-list-item')) || []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
            localStorage.setItem('todo-list-item',JSON.stringify(state.todoList));
        },
        setCheck: (state,action) =>{
            state.todoList.map(item =>{
                if(action.payload === item.id){
                    item.done = !item.done;
                }
            })
            localStorage.clear();
            localStorage.setItem('todo-list-item',JSON.stringify(state.todoList));
        }
    }
});

export const {
    saveTodo,
    setCheck
} = todoSlice.actions;

export const selectTodoList = state => state.todos.todoList;

export default todoSlice.reducer;