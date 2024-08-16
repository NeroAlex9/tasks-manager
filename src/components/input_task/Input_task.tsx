import React from "react";
import styles from "./input_task.module.scss";
import { Task_button } from "../task_button/Task_button";

function Input_task() {
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
          <Task_button onClick={() => {}} text="Очистить" />
          <Task_button onClick={() => {}} text="Добавить" />
        </div>
      </div>
    </>
  );
}
export default Input_task;
