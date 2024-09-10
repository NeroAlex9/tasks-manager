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

export const registerSlice = createSlice({
    name: "Register",
    initialState,
    reducers:{
        createLogin: (state, action: PayloadAction<string>)=>{
            state.login = action.payload
        },
        createPassword: (state, action: PayloadAction<any>)=>{
            state.password = action.payload
        },
        createUser:(state)=>{
            state.people.push({id:state.id, login:state.login, password:state.password})
            state.id+=1
        }
    }
})

export const {createLogin, createPassword, createUser} = registerSlice.actions
export default registerSlice.reducer