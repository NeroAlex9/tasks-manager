import React from "react";
import styles from "./tasks.module.scss";
import InputTask from "../../components/input_task/Input_task";
import TaskElement from "../../components/task_element/task_element";

function Tasks() {
  return (
    <div className={styles.column}>
      <InputTask />
      <TaskElement text='Task1' />
    </div>
  );
}
export default Tasks;
