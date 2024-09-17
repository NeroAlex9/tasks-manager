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
            <svg
          width="48"
          height="28"
          viewBox="0 0 48 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 14H48M4 14L16.0548 2M4 14L16.0548 26"
            stroke="#051021"
            stroke-width="5"
          />
        </svg>
        </div>
    );
}

export default LeftColumn;
