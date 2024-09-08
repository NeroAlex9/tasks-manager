import {NavLink} from "react-router-dom";
import styles from "./auth.module.scss";
import {FormButton} from "../form_button/Form_button";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {RootState} from "../../store/store";

interface IAuth {
    formName: string;
    textButton: string;
    textLink: string;
}

const Auth: React.FC<IAuth> = ({formName, textButton, textLink}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isAuth, setIsAuth] = useState(false)
    const usersData = useSelector((state: RootState) => state.register.people)
    useEffect(() => {
    }, [isAuth])

    let logIn = () => {
        usersData.find((item) => {
            if (item.login === login && item.password === password) {
                setIsAuth(true)
            }
        })
    }
    let navLinkTo = () => {
        if (isAuth) {
            return '/tasks'
        }
        return ''
    }

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
            <NavLink to={navLinkTo()}>
                <FormButton onClick={() => {
                    logIn()
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
