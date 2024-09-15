import {NavLink} from "react-router-dom";
import styles from "./register.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {createLogin, createPassword, createUser} from "../../store/slice/registerSlice/registerSlice";
import {useEffect, useState} from "react";
import {FormButton} from "../form_button/Form_button";
import type {RootState} from "../../store/store";


const Register = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    // const [error, setError] = useState(false)
    const users = useSelector((state: RootState) => state.register.people)


    let checkRegisterData = () => {
        if (!checkErrorLogin() && !checkErrorPassword() && password === repeatPassword && login && password) {
            return '/'
        }
        return ''
    }

    let checkErrorLogin = () => {
        const userExists = users.find((item) => item.login===login)
        if (login.length >= 1 && login.length < 5) {
            return <p className={styles.form__error}> Логин менее 5 символов!</p>
        }
        else if(userExists) {
            return <p className={styles.form__error}> Логин существует!</p>
        }
    }

    let checkErrorPassword = () => {
        if (password.length>=1 && password.length<6 ) {
            return <p className={styles.form__error}>Пароль менее 6 символов!</p>
        }
        else if (password.length !== repeatPassword.length || password !== repeatPassword) {
            return <p className={styles.form__error}>Пароли не совпадают!</p>
        }
    }

    let dispatchNewUser = () => {
        if ( !checkErrorLogin() && !checkErrorPassword() && login && password) {
            return () => dispatch(createUser())
        }
        return () => {
        }
    }

    useEffect(() => {
        dispatch(createLogin(login))
        dispatch(createPassword(password))
    }, [dispatch, login, password, repeatPassword])

    return (
        <form className={styles.form}>
            <h2 className={styles.form__inlet}>Регистрация</h2>
            <>
                <input
                    type="string"
                    onChange={(e) => setLogin(e.target.value)}
                    className={styles.form__input}
                    placeholder="Логин"
                    autoComplete='username'
                />
                {checkErrorLogin()}
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.form__input}
                    placeholder="Пароль"
                    autoComplete='new-password'
                />
                <input
                    type='password'
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    className={styles.form__input}
                    placeholder="Повторите пароль"
                    autoComplete='new-password'
                />
                {checkErrorPassword()}
            </>
            <NavLink to={checkRegisterData()}>
                <FormButton onClick={dispatchNewUser()} text="Зарегистрироваться"/>{" "}
            </NavLink>
            <NavLink to="/">
                <button className={styles.form__button}>
                    Вход
                </button>
            </NavLink>
        </form>
    );
};

export default Register;
