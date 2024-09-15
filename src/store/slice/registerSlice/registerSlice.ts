import { createSlice, isAction, PayloadAction } from "@reduxjs/toolkit";

interface IRegisterState  {
    id:number,
    login: string,
    password: any,
    isAuth: boolean,
    people:Array<{ id: number; login: string; password: any}>
}

const initialState: IRegisterState = {
    id:0,
    login:'',
    password:'',
    isAuth: false,
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
        },
        isAuth:(state, action: PayloadAction<boolean>)=>{
            state.isAuth=action.payload
        }

    }
})

export const {createLogin, createPassword, createUser, isAuth} = registerSlice.actions
export default registerSlice.reducer