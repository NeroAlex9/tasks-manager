import { NavLink } from "react-router-dom";
import styles from "./register.module.scss";
import { useDispatch, useSelector} from "react-redux";
import { createLogin, createPassword, createUser } from "../../store/slice/registerSlice/registerSlice";
import { useEffect, useState } from "react";
import { FormButton } from "../form_button/Form_button";
import { RootState } from "../../store/store";

interface IRegister {
  formName: string;
  textButton: string;
  textLink: string;
}

const Register: React.FC<IRegister> = ({ formName, textButton, textLink }) => {
  // const BD = useSelector((state: RootState)=> state.register.people)
  const dispatch = useDispatch();
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
useEffect(()=>{
  // console.log(BD)
  dispatch(createLogin(login))
  dispatch(createPassword(password))
},[dispatch,login,password,repeatPassword])


  return (
    <form className={styles.form}>
      <h2 className={styles.form__inlet}>{formName}</h2>
      <input
      type="string"
  onChange={(e)=>setLogin(e.target.value)}
  className={styles.form__input}
  placeholder="Логин"
/>
<input
type='password'
onChange={(e)=>setPassword(e.target.value)}
  className={styles.form__input}
   placeholder="Пароль"
/>
<input
type='password'
onChange={(e)=>setRepeatPassword(e.target.value)}
  className={styles.form__input}
   placeholder="Повторите пароль"
/>
<p className = {password==repeatPassword 
? styles.form__passwordOk
: styles.form__passwordError
}>Пароли не совпадают!</p>
      <NavLink to={password===repeatPassword && login.length>0 && password.length>0
        ?"/"
        :''}>
        <FormButton onClick={
          password===repeatPassword && login.length>0 && password.length>0
          ? () => {dispatch(createUser())}
          :()=>{}
          } text={textButton} />{" "}
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
