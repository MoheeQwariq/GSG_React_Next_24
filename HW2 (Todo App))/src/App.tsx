import { useState } from "react";
import "./App.css";
import AllTodos from "./components/allTodos";
import Date from "./components/date";
import Form from "./components/form";
import TodoData from "./components/todoData";
import { Task } from "./type";

function App() {
  const [todos, setTodos] = useState<Task[]>([]);
  const handelNewItem = (item: Task) => setTodos([...todos, item]);

  const handelTaskToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemId = e.target.dataset["itemId"];
    const newItems = todos.map((item) =>
      item.id === Number(itemId) ? { ...item, isDone: !item.isDone } : item
    );
    setTodos(newItems);
  };
   const handelOnDelete =(index:number)=>{
    const newTodos = todos.filter((_,i)=> i !== index)
    setTodos(newTodos);
   }

  return (
    <div className="screen">
      <Date />
      <Form onSubmit={handelNewItem} />
      <TodoData items={todos} />
      <AllTodos items={todos} onToggle={handelTaskToggle} onDelete={handelOnDelete}/>
    </div>
  );
}

export default App;
