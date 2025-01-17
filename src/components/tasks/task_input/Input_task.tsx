import React, { useEffect, useState } from "react";
import '../../../App'
import styles from "./input_task.module.scss";
import  {TaskButton} from "../task_button/Task_button";
import { useDispatch} from "react-redux";
import { addTask, setTaskText } from "../../../store/slice/tasksSlice/tasksSlice";



function InputTask() {
  const dispatch = useDispatch()
const[task, setTask]=useState('')
useEffect(()=>{
dispatch(setTaskText(task))
},[dispatch,task])

let addNewTask = ()=>{
  dispatch(addTask());
  setTask('')
}

let keyDownEnter = (event: React.KeyboardEvent)=>{
      if(task && event.key==='Enter'){
          addNewTask()
      }
}


  return (
    <>
      <h1 className={styles.text}>
        <span className={styles.text__span}>Менеджер</span> Задач
      </h1>
      <div className={styles.input}>
        <input
        onChange={e=>setTask(e.target.value)}
          className={styles.input__task}
          placeholder="Название задачи"
          value={task}
        onKeyDown={keyDownEnter}
        ></input>
        <div className={styles.input__buttons}>
          <TaskButton onClick={()=>setTask('')} color='#D75959' text="Очистить" />
          <TaskButton onClick={task ? addNewTask : ()=>{}} color='black' text="Добавить" />
        </div>
      </div>
    </>
  );
}
export default InputTask;
