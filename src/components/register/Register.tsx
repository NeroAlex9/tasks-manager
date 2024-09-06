import { NavLink } from "react-router-dom";
import styles from "./register.module.scss";
import { useDispatch} from "react-redux";
import { createLogin, createPassword, createUser } from "../../store/slice/registerSlice/registerSlice";
import { useEffect, useState } from "react";
import { FormButton } from "../form_button/Form_button";

interface IRegister {
  formName: string;
  textButton: string;
  textLink: string;
}

const Register: React.FC<IRegister> = ({ formName, textButton, textLink }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
useEffect(()=>{
  
  dispatch(createLogin(login))
  dispatch(createPassword(password))
},[dispatch,login,password])


  return (
    <form className={styles.form}>
      <h2 className={styles.form__inlet}>{formName}</h2>
      <input
  onChange={(e)=>setLogin(e.target.value)}
  className={styles.input}
  placeholder="Логин"
/>
<input
onChange={(e)=>setPassword(e.target.value)}
  className={styles.input}
   placeholder="Пароль"
/>
<input
  className={styles.input}
   placeholder="Повторите пароль"
/>
      <NavLink to="/tasks">
        <FormButton onClick={() => {
          dispatch(createUser())
        }} text={textButton} />{" "}
      </NavLink>
      <NavLink to={textLink === "Вход" ? "/" : "/register"}>
        <button className={styles.form__button}>
          {textLink}
        </button>
      </NavLink>
    </form>
  );
};

export default Register;
