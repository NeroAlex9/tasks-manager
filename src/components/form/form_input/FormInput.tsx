import React, { useEffect, useState } from "react";
import styles from "./Form_input.module.scss";
import { useDispatch } from "react-redux";
import { createLogin, createPassword } from "../../../store/slice/registerSlice/registerSlice";
interface IFormInput {
  value: string;
  text: string;
  type: string;
}

export const FormInput: React.FC<IFormInput> = ({ value, text, type }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
useEffect(()=>{
  dispatch(createLogin(login))
  dispatch(createPassword(password))
},[dispatch,login,password])

  return <input
  value={type==='text' 
    ? login
    : password
   }
   onChange={type==='text'
    ? e=>{setLogin(e.target.value)}
    : e=>{setPassword(e.target.value)}
   }
  className={styles.input}
  type={type}
  placeholder={text}
/>
}
 

