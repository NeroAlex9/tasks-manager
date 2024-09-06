
import { NavLink } from "react-router-dom";
import styles from "./auth.module.scss";
import { FormButton } from "../form_button/Form_button";

interface IAuth {
  formName: string;
  textButton: string;
  textLink: string;
}

const Auth: React.FC<IAuth> = ({ formName, textButton, textLink }) => {
  return (
    <form className={styles.form}>
      <h2 className={styles.form__inlet}>{formName}</h2>
      <input
  className={styles.input}
  placeholder="Логин"
/>
<input
  className={styles.input}
   placeholder="Пароль"
/>
      <NavLink to="/tasks">
        <FormButton onClick={() => {
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

export default Auth;
