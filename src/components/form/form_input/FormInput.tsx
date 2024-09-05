import React from "react";
import styles from "./Form_input.module.scss";
interface IFormInput {
  value: string;
  text: string;
  type: string;
}

export const FormInput: React.FC<IFormInput> = ({ value, text, type }) => (
  <input
    className={styles.input}
    type={type}
    placeholder={text}
  />
);
