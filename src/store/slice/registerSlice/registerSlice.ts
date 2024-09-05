import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IRegisterState  {
    id:number,
    login: string,
    password: any,
    people:Array<{ id: number; login: string; password: any}>
}

const initialState: IRegisterState = {
    id:0,
    login:'',
    password:'',
    people: []
}
debugger;

export const registerSlice = createSlice({
    name: "Register",
    initialState,
    reducers:{
        createLogin: (state, action: PayloadAction<string>)=>{
            state.login = action.payload
        }
    }
})

export const {createLogin} = registerSlice.actions
export default registerSlice.reducer