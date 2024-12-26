import { useState } from "react";
import "./App.css";
import Keyboard from "./components/keyboard";
import Result from "./components/result";

function App() {
  const  [screen, setSecreen] = useState("");
  return (
    <div className="screen">
      <Result screen={screen}/>
      <Keyboard screen={screen} setScreen={setSecreen}/>
    </div>
  );
}

export default App;
