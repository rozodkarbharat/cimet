import { createSlice } from "@reduxjs/toolkit";



const initialState = {
        input :"",
        todos:[],
        isToUpdate:""
}

const todoSlice = createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos=[...state.todos,{id:Date.now(),title:state.input,isCompleted:false}]
            state.input = ""
        },
        inputTodo:(state,action)=>{
            state.input = action.payload
        },
        deleteTodo:(state,action)=>{
            state.todos= state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos= state.todos.map((todo)=>{
                if(todo.id === state.isToUpdate){
                    return {...todo, title:state.input}
                }
                else{
                    return todo
                }
            })
            state.input = ""
            state.isToUpdate = ""
        },
        toggleTodo:(state,action)=>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    return {...todo, isCompleted:!todo.isCompleted}
                }
                    return todo

            })
        },
        clickUpdate:(state, action)=>{
            state.isToUpdate = action.payload
            state.input = state.todos.filter(todo=>todo.id === action.payload)[0].title
        }
    }
})

export const selectTodo = (state) => {return state.todo};

export const {addTodo,deleteTodo, inputTodo, updateTodo, toggleTodo, clickUpdate} = todoSlice.actions;



export default todoSlice.reducer