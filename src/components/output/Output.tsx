import React from 'react';
import {FormButton} from "../form_button/Form_button";
import {NavLink} from "react-router-dom";
import styles from './output.module.scss'
import { isAuth } from '../../store/slice/registerSlice/registerSlice';
import { useDispatch } from 'react-redux';


const Output= () => {
    let dispatch= useDispatch()
    return (
        <div className={styles.button} >
            <NavLink to='/' >
                <FormButton onClick={()=>{dispatch(isAuth(false))}} text="Выход" />
            </NavLink>
        </div>
    );
};

export default Output;