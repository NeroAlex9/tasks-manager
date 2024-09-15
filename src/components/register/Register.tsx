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
    const [error, setError] = useState('')
    const users = useSelector((state: RootState) => state.register.people)


    let checkRegisterData = () => {
        if (!error && password === repeatPassword && login && password) {
            return '/'
        }
        return ''
    }

    let checkError = () => {
        const userExists = users.find((item) => item.login===login)
        if (login.length >= 1 && login.length < 5) {
            return setError('Логин менее 5 символов!')
        }
        else if(userExists) {
            return setError('Логин существует!')
        }
        if (password.length>=1 && password.length<6 ) {
            return setError('Пароль менее 6 символов!')
        }
        else if (password.length !== repeatPassword.length || password !== repeatPassword) {
            return setError('Пароли не совпадают!')
        }
        else (setError(''))
    }

    let dispatchNewUser = () => {
        if ( !error && login && password) {
            return () => dispatch(createUser())
        }
        return () => {
        }
    }

    useEffect(() => {
        dispatch(createLogin(login))
        dispatch(createPassword(password))
        checkError()
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
                {error && <p className={styles.form__error}>{error}</p>}
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
