import {NavLink, useNavigate} from "react-router-dom";
import styles from "./auth.module.scss";
import {FormButton} from "../form_button/Form_button";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {RootState} from "../../store/store";
import {addIdUSer} from "../../store/slice/tasksSlice/tasksSlice";
import { isAuth } from "../../store/slice/registerSlice/registerSlice";


const Auth = () => {
    const dispatch=useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const usersData = useSelector((state: RootState) => state.register.people)
    const isAuthState = useSelector((state: RootState) => state.register.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if(isAuthState){navigate('/tasks')}
    },[isAuthState,navigate])

    let logIn = () => {
        usersData.find((item) => {
            if (item.login === login && item.password === password) {
               return (dispatch(isAuth(true)), dispatch(addIdUSer(item.id)))
            }
            return ''
        })
    }

    return (
        <form className={styles.form}>
            <h2 className={styles.form__inlet}>Вход</h2>
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
            <NavLink to={isAuthState ? '/tasks' : '' }>
                <FormButton onClick={() => {
                    logIn()
                }} text="Войти"/>{" "}
            </NavLink>
            <NavLink to="/register">
                <button className={styles.form__button}>
                    Зарегистрироваться
                </button>
            </NavLink>
        </form>
    );
};

export default Auth;
