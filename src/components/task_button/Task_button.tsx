import React from "react";
import styles from "./task_button.module.scss";
interface IProps {
  onClick: () => void;
  text: string;
}
export const Task_button: React.FC<IProps> = ({ onClick, text }) => (
  <button
    className={
      text === "Добавить" ? `${styles.button} + ${styles.black}` : styles.button
    }
    onClick={onClick}
  >
    {text}
  </button>
);
