import { ITodos } from "../../type";
import TodoItem from "../todoItem";
import "./allTodos.css";


const AllTodos = (props:ITodos) => {
  return (
    <div className="todos">
      {
        props.items.map((item,index) => 
        <TodoItem 
        key={item.id} 
        data={item}
        onToggle={props.onToggle}
        onDelete={()=>props.onDelete(index)}
        />)
      }

    </div>
  );
};

export default AllTodos;
