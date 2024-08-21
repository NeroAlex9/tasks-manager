import React from "react";
import { FormInput } from "./form_input/FormInput";
import { FormButton } from "./form_button/Form_button";
import styles from "./form.module.scss";
import { NavLink } from "react-router-dom";

interface IProps {
  formName: string;
  textButton: string;
  textLink: string;
}

const Form: React.FC<IProps> = ({ formName, textButton, textLink }) => {
  return (
    <form className={styles.form}>
      <h2 className={styles.form__inlet}>{formName}</h2>
      <FormInput value={"#"} type={"text"} text={"login"} />
      <FormInput value={"#"} type={"password"} text={"password"} />
      <NavLink to="/tasks">
        <FormButton onClick={() => {}} text={textButton} />{" "}
      </NavLink>
      <NavLink to={textLink === "Вход" ? "/" : "/register"}>
        <button className={styles.form__button} onClick={() => {}}>
          {textLink}
        </button>
      </NavLink>
    </form>
  );
};

export default Form;
