import React, { useState } from "react";
import { FormInput } from "./form_input/FormInput";
import { FormButton } from "./form_button/Form_button";
import styles from "./form.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { createLogin } from "../../store/slice/registerSlice/registerSlice";

interface IForm {
  formName: string;
  textButton: string;
  textLink: string;
}



const Form: React.FC<IForm> = ({ formName, textButton, textLink }) => {
  const loginBD = useSelector((state:RootState)=>state.register.login)
  const [login, setLogin] = useState('')


  const dispatch = useDispatch();
  debugger
  return (
    <form className={styles.form}>
      <h2 className={styles.form__inlet}>{formName}</h2>
      <FormInput value={"#"} type={"text"} text={"Логин"}  />
      <span>{loginBD}</span>
      <FormInput value={"#"} type={"password"} text={"Пароль"} />
      {textLink === "Вход" 
      ? <FormInput value={"#"} type={"password"} text={"Повторите пароль"} /> 
      : ""}
      <NavLink to="/tasks">
        <FormButton onClick={() => {}} text={textButton} />{" "}
      </NavLink>
      <NavLink to={textLink === "Вход" ? "/" : "/register"}>
        <button className={styles.form__button}>
          {textLink}
        </button>
       
      </NavLink>
      <button  onClick={() => {
            dispatch(createLogin(login))
        }}></button>
    </form>
  );
};

export default Form;
