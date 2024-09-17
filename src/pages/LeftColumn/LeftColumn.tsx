import React from "react";
import styles from "./LeftColumn.module.scss";
import Auth from "../../components/auth/Auth";
import {Route, Routes} from "react-router-dom";
import Output from "../../components/output/Output";
import Register from "../../components/register/Register";

function LeftColumn() {
    return (
        <div className={styles.column}>
            <Routes>
                <Route path="/"element={<Auth/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/tasks" element={<Output/>}/>
            </Routes>
        </div>
    );
}

export default LeftColumn;
