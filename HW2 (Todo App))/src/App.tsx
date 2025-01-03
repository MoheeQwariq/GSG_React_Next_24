import "./App.css";
import Date from "./components/date";
import Form from "./components/form";
import TodoDate from "./components/todoDate";

function App() {
  return (
  <div className="screen">
    <Date/>
    <Form/>
    <TodoDate/>
  </div>);
}

export default App;
