import React from "react";
import { FormInput } from "../form-input/FormInput";
import { FormButton } from "../form-button/Form_button";
import styles from "./form.module.scss";

function Form() {
  return (
    <form className={styles.form}>
      <h2 className={styles.form__inlet}>Регистрация</h2>
      <FormInput value={"#"} type={"text"} />
      <FormInput value={"#"} type={"password"} />
      <FormButton onClick={() => {}} text={"Войти"} />
      <button className={styles.form__button} onClick={() => {}}>
        Зарегистрироваться
      </button>
    </form>
  );
}

export default Form;
