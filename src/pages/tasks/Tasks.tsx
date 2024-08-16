import React from "react";
import styles from "./tasks.module.scss";
import Input_task from "../../components/input_task/Input_task";
import Task_element from "../../components/task_element/task_element";

function Tasks() {
  return (
    <div className={styles.column}>
      <Input_task />
      <Task_element />
    </div>
  );
}
export default Tasks;
