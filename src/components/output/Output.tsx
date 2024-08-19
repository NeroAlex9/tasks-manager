import React from 'react';
import {FormButton} from "../form-button/Form_button";
import {NavLink} from "react-router-dom";
import styles from './output.module.scss'


const Output= () => {
    return (
        <div className={styles.button} >
            <NavLink to='/' >
                <FormButton onClick={()=>{}} text="Выход" />
            </NavLink>
        </div>
    );
};

export default Output;