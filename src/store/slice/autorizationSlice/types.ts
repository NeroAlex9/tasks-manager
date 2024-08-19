export enum formToggle {
    SIGN_UP='signUP',
    SIGN_IN='signIn',
    EXIT='EXIT'
}

export type IForm = formToggle.SIGN_UP|formToggle.SIGN_IN|formToggle.EXIT

export interface IAutorizationSlice{
    typeForm:IForm,
    login:string,
    password:string,
    error:string
}