import React from 'react';
import {FormButton} from "../form_button/Form_button";
import {NavLink} from "react-router-dom";
import styles from './output.module.scss'
import { isAuth } from '../../store/slice/authSlice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "../../store/store";


const Output= () => {
    let dispatch= useDispatch()
    const loginUser = useSelector((state: RootState) => state.auth.login)
    
    return (
        <div> 
            <p className={styles.name}>Привет: {loginUser}</p>
        <div className={styles.button} >
            <NavLink to='/' >
                <FormButton onClick={()=>{dispatch(isAuth(false))}} text="Выход" />
            </NavLink>
        </div>
        </div>
    );
};

export default Output;