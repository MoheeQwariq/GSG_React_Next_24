import { useState } from "react";
import "./App.css";
import AllTodos from "./components/allTodos";
import Date from "./components/date";
import Form from "./components/form";
import TodoDate from "./components/todoDate";
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
    setTodos([...todos.slice(0,index), ...todos.slice(index +1,todos.length)]);
   }

  return (
    <div className="screen">
      <Date />
      <Form onSubmit={handelNewItem} />
      <TodoDate items={todos} />
      <AllTodos items={todos} onToggle={handelTaskToggle} onDelete={handelOnDelete}/>
    </div>
  );
}

export default App;
