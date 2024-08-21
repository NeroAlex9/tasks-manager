import React from "react";
import styles from "./task_button.module.scss";
interface ITaskButton {
  onClick: () => void;
  text: string;
  color: string;
}

export const TaskButton: React.FC<ITaskButton> = ({ onClick, text, color }) => (
  <button
    className={styles.button}
    style={{ borderColor: color, color: color }}
    onClick={onClick}
  >
    {text}
  </button>
);
