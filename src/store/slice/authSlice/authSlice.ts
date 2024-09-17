import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState  {
    id:number,
    login: string,
    isAuth: boolean,
}

const initialState: IAuthState = {
    id:0,
    login:'',
    isAuth: false,
}

export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers:{
        setId: (state, action: PayloadAction<number>)=>{
            state.id = action.payload
        },
        setLoginAuth: (state, action: PayloadAction<string>)=>{
            state.login = action.payload
        },
        isAuth:(state, action: PayloadAction<boolean>)=>{
            state.isAuth=action.payload
        }

    }
})

export const {setId, setLoginAuth, isAuth} = authSlice.actions
export default authSlice.reducer