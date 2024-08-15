import React from 'react';
import styles from './LeftColumn.module.scss'
import Auth from "../../components/auth/Auth";

function LeftColumn() {
    return (
        <div className={styles.column}>
            <Auth/>
        </div>
    );
}
export default LeftColumn;