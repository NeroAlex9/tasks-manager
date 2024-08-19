import React from "react";
import styles from "./task_button.module.scss";
interface IProps {
  onClick: () => void;
  text: string;
  color:string;
}


export const TaskButton: React.FC<IProps> = ({ onClick, text, color }) => (
  <button
    className={styles.button}
    style={{borderColor:color, color:color }}
    onClick={onClick}
  >
    {text}
  </button>
);

