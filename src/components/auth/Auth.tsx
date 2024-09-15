import {NavLink, useNavigate} from "react-router-dom";
import styles from "./auth.module.scss";
import {FormButton} from "../form_button/Form_button";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {RootState} from "../../store/store";
import {addIdUSer} from "../../store/slice/tasksSlice/tasksSlice";
import {isAuth} from "../../store/slice/registerSlice/registerSlice";


const Auth = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const usersData = useSelector((state: RootState) => state.register.people)
    const isAuthState = useSelector((state: RootState) => state.register.isAuth)
    const navigate = useNavigate()

    const checkError = () => {
        const oldUser = usersData.find((item) => item.login === login);
        if (login.length >= 1 && login.length < 5) {
            setError('Логин менее 5 символов!');
            return false;
        } else if (password.length >= 1 && password.length < 6) {
            setError('Пароль менее 6 символов!');
            return false;
        } else if (password.length >= 6 && oldUser && oldUser.password !== password) {
            setError('Пароль введен не верно');
            return false;
        } else if (login.length >= 5 && !oldUser) {
            setError('Пользователя не существует');
            return false;
        } else {
            setError('');
            return true;
        }
    };

    const logIn = () => {
        if (checkError()) {
            const user = usersData.find((item) => item.login === login && item.password === password);
            if (user) {
                dispatch(isAuth(true));
                dispatch(addIdUSer(user.id));
            }
        }
    };
    useEffect(() => {
        if (isAuthState) {
            navigate('/tasks')
        }
    }, [isAuthState, navigate])



    return (
        <form className={styles.form}>
            <h2 className={styles.form__inlet}>Вход</h2>
            <>
                <input
                    onChange={e => setLogin(e.target.value)}
                    className={styles.input}
                    placeholder="Логин"
                    autoComplete='username'
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    className={styles.input}
                    type='password'
                    placeholder="Пароль"
                    autoComplete='new-password'
                />
                {error && <p className={styles.form__error}>{error}</p>}
            </>
            <NavLink to={isAuthState ? '/tasks' : ''}>
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
