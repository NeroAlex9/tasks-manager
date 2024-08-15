import React from 'react';
import styles from './LeftColumn.module.scss'
import {FormInput} from "../../components/form-input/FormInput";
import {FormButton} from "../../components/form-button/Form_button";

function LeftColumn() {
    return (
        <div className={styles.column}>
            <FormInput value={''} type={''}/>
            <FormButton onClick={()=>{}} text={'Регистрация'}/>
        </div>
    );
}
export default LeftColumn;