import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState  {
    login: string,
    password: any,
    user: {login: string, password: any}
}

const initialState: IAuthState = {
    login:'',
    password:'',
    user: {login: '', password: ''},
}


export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers:{
        authLogin: (state, action: PayloadAction<string>)=>{
            state.login = action.payload
        },
        authPassword: (state, action: PayloadAction<any>)=>{
            state.password = action.payload
        },
        createAuthData:(state)=>{
            state.user = {login: state.login, password:state.password}
        }
    }
})

export const {authLogin, authPassword, createAuthData} = authSlice.actions
export default authSlice.reducer