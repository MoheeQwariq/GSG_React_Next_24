import "./App.css";
import Keyboard from "./components/keyboard";
import Result from "./components/result";

function App() {
  return (
    <div className="screen">
      <Result />
      <Keyboard />
    </div>
  );
}

export default App;
