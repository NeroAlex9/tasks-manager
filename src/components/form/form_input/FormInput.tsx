import React from 'react';
import styles from './Form_input.module.scss'
interface IProps {
    value:string;
    text:string;
    type:string
}

export const FormInput: React.FC<IProps> = ({value, text, type})=>
    <input className={styles.input} type={type} placeholder={text==='login' ? 'Логин' : 'Пароль' }/>




