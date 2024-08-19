import React from "react";
import "./App.scss";
import LeftColumn from "./pages/LeftColumn/LeftColumn";
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
