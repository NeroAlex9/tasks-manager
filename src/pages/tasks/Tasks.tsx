import React from "react";
import styles from "./tasks.module.scss";
import InputTask from "../../components/task_input/Input_task";
import TaskElement from "../../components/task_element/task_element";

function Tasks() {
  return (
    <div className={styles.column}>
      <InputTask />
      <TaskElement text='Task1' />
        <TaskElement text='Имеются изображения разных размеров(ширина, высота), которые выводятся с помощью <img src=""> . ' />
    </div>
  );
}
export default Tasks;
