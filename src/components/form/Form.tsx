import React from "react";
import { FormInput } from "../form-input/FormInput";
import { FormButton } from "../form-button/Form_button";
import styles from "./form.module.scss";
import { NavLink } from "react-router-dom";

function Form() {
  return (
    <form className={styles.form}>
      <h2 className={styles.form__inlet}>Вход</h2>
      <FormInput value={"#"} type={"text"} text={'login'} />
      <FormInput value={"#"} type={"password"} text={'password'} />
      <NavLink to="/tasks">
        <FormButton onClick={() => {}} text={"Войти"} />{" "}
      </NavLink>
      <button className={styles.form__button} onClick={() => {}}>
        Зарегистрироваться
      </button>
    </form>
  );
}

export default Form;
