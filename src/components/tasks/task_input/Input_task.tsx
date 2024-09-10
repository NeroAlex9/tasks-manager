import React, { useEffect, useState } from "react";
import '../../../App'
import styles from "./input_task.module.scss";
import type { RootState } from '../../../store/store'
import  {TaskButton} from "../task_button/Task_button";
import { useDispatch, useSelector } from "react-redux";
import { addTask, createTask } from "../../../store/slice/tasksSlice/tasksSlice";



function InputTask() {
  // const tasksArr = useSelector((state: RootState) => state.tasks)
  const dispatch = useDispatch()
const[task, setTask]=useState('')
useEffect(()=>{
  // console.log(tasksArr)
dispatch(createTask(task))
},[dispatch,task])

let addNewTask = ()=>{
  return ()=>dispatch(addTask())
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
        ></input>
        <div className={styles.input__buttons}>
          <TaskButton onClick={() => {}} color='#D75959' text="Очистить" />
          <TaskButton onClick={addNewTask()} color='black' text="Добавить" />
        </div>
      </div>
    </>
  );
}
export default InputTask;
