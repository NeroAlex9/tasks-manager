import {NavLink} from "react-router-dom";
import styles from "./auth.module.scss";
import {FormButton} from "../form_button/Form_button";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {authLogin, authPassword, createAuthData} from "../../store/slice/authSlice/authSlice";
import {RootState} from "../../store/store";

interface IAuth {
    formName: string;
    textButton: string;
    textLink: string;
}

const Auth: React.FC<IAuth> = ({formName, textButton, textLink}) => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const usersData = useSelector((state: RootState)=> state.register.people)
    const userAuthData = useSelector((state: RootState)=> state.auth.user)
    useEffect(() => {
        // console.log(BD)
        dispatch(authLogin(login))
        dispatch(authPassword(password))
    }, [dispatch, login, password])

    let seearchUser = ()=>{
        dispatch(createAuthData())
    }

    // let logIn = ()=>{
    //     usersData.
    // }

    return (
        <form className={styles.form}>
            <h2 className={styles.form__inlet}>{formName}</h2>
            <input
                onChange={e => setLogin(e.target.value)}
                className={styles.input}
                placeholder="Логин"
                autoComplete='username'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Пароль"
                autoComplete='new-password'
            />
            <NavLink to="/tasks">
                <FormButton onClick={() => {
                }} text={textButton}/>{" "}
            </NavLink>
            <NavLink to="/register">
                <button className={styles.form__button}>
                    {textLink}
                </button>
            </NavLink>
        </form>
    );
};

export default Auth;
