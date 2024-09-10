import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITasksState  {
    idUser:number
    idTask:number,
    text: string,
    tasks:Array<{idUser:number; idTask: number; text: string}>
}

const initialState: ITasksState = {
    idUser:0,
    idTask:0,
    text:'',
    tasks: []
}


export const tasksSlice = createSlice({
    name: "Tasks",
    initialState,
    reducers:{
        createTask: (state, action: PayloadAction<string>)=>{
            state.text = action.payload
        },
        addTask:(state)=>{
            state.tasks.unshift({idUser:state.idUser, idTask:state.idTask, text:state.text})
            state.idTask+=1
        }
       
    }
})

export const {createTask, addTask} = tasksSlice.actions
export default tasksSlice.reducer