import React from "react";
import styles from "./Form_button.module.scss";
interface IFormButton {
  onClick: () => void;
  text: string;
}
export const FormButton: React.FC<IFormButton> = ({ onClick, text }) => (
  <button className={styles.button} onClick={onClick}>
    {text}
  </button>
);
