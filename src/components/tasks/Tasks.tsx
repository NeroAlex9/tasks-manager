import React, { useEffect } from "react";
import styles from "./tasks.module.scss";
import InputTask from "./task_input/Input_task";
import TaskElement from "./task_element/task_element";
import { useSelector } from "react-redux";
import type { RootState } from '../../store/store'
import { reverse } from "dns";

function Tasks() {
  
const tasksArr = useSelector((state: RootState) => state.tasks.tasks)


const addedTask=()=>{
  return  tasksArr.map((task)=>{
      if(task){
          return <TaskElement text={task.text} taskId={task.idTask} />
      }
     return ''
    })
    
}
  return (
    <div className={styles.column}>
      <InputTask />
        <div className={styles.tasks}>
        {addedTask()}
        </div>
    </div>
  );
}
export default Tasks;
