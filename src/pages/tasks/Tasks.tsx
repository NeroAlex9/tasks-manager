import React from "react";
import styles from "./tasks.module.scss";
import InputTask from "../../components/task_input/Input_task";
import TaskElement from "../../components/task_element/task_element";

function Tasks() {
  return (
    <div className={styles.column}>
      <InputTask />
        <div className={styles.tasks}>
        <TaskElement text='Имеются изображения разных размеров(ширина, высота), которые выводятся с помощью <img src=""> . ' />
        </div>
    </div>
  );
}
export default Tasks;
