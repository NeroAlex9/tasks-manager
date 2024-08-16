import React from "react";
import "./App.scss";
import LeftColumn from "./pages/left_column/LeftColumn";
import RightColumn from "./pages/RightColumn/RightColumn";

function App() {
  return (
    <div className="App">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default App;
