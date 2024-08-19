import React from "react";
import './../../App'
import styles from "./input_task.module.scss";
import  {TaskButton} from "../task_button/Task_button";

function InputTask() {
  return (
    <>
      <h1 className={styles.text}>
        <span className={styles.text__span}>Менеджер</span> Задач
      </h1>
      <div className={styles.input}>
        <input
          className={styles.input__task}
          placeholder="Название задачи"
        ></input>
        <div className={styles.input__buttons}>
          <TaskButton onClick={() => {}} color='#D75959' text="Очистить" />
          <TaskButton onClick={() => {}} color='black' text="Добавить" />
        </div>
      </div>
    </>
  );
}
export default InputTask;
