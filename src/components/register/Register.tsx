import {NavLink} from "react-router-dom";
import styles from "./register.module.scss";
import {useDispatch} from "react-redux";
import {createLogin, createPassword, createUser} from "../../store/slice/registerSlice/registerSlice";
import {useEffect, useState} from "react";
import {FormButton} from "../form_button/Form_button";


interface IRegister {
    formName: string;
    textButton: string;
    textLink: string;
}

const Register: React.FC<IRegister> = ({formName, textButton, textLink}) => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    useEffect(() => {
        dispatch(createLogin(login))
        dispatch(createPassword(password))
    }, [dispatch, login, password, repeatPassword])

    let checkRegisterData = () => {
        if (password === repeatPassword && login && password) {
            return '/'
        }
        return ''
    }
    let checkRepeatPassword = () => {
        if (password !== repeatPassword) {
            return <p className={styles.form__passwordError}>Пароли не совпадают!</p>
        }
        return ''
    }
    let dispatchNewUser = () => {
        if (password === repeatPassword && login && password) {
            return () => dispatch(createUser())
        }
        return () => {
        }
    }

    return (
        <form className={styles.form}>
            <h2 className={styles.form__inlet}>{formName}</h2>
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
            {checkRepeatPassword()}
            <NavLink to={checkRegisterData()}>
                <FormButton onClick={dispatchNewUser()} text={textButton}/>{" "}
            </NavLink>
            <NavLink to="/">
                <button className={styles.form__button}>
                    {textLink}
                </button>
            </NavLink>
        </form>
    );
};

export default Register;
