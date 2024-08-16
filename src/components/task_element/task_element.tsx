import React from "react";
import styles from "./task_element.module.scss";

interface IProps {
  text:string
}

const TaskElement: React.FC<IProps> = ({text})=> {
  return <div className={styles.column}>
    <input className={styles.column__checkbox} type='radio'/>
    <p className={styles.column__text}>{text}</p>
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="14.0941" y1="1.41108" x2="1.41108" y2="15.9059" stroke="#D75959" stroke-width="2"
            stroke-linecap="round"/>
      <line x1="13.5933" y1="15.8545" x2="1.85448" y2="1.40671" stroke="#D75959" stroke-width="2"
            stroke-linecap="round"/>
    </svg>
  </div>;
}
export default TaskElement;
