import React from "react";
import styles from "./RightColumn.module.scss";
import { Welcome } from "../../components/welcome/Welcome";
import Tasks from "../tasks/Tasks";
import { Route, Routes } from "react-router-dom";

function RightColumn() {
  return (
    <div className={styles.column}>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}
export default RightColumn;
