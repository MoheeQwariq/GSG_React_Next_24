import { IItem } from "../../type";
import "./todoItem.css";
import { Trash } from "@phosphor-icons/react";

const TodoItem = ({ data, onToggle, onDelete }: IItem) => {
  return (
    <div
      className={`task ${data.isUrgent ? "urg" : ""} ${
        data.isDone ? "isDone" : ""
      }`}
    >
      <input
        className="check"
        type="checkbox"
        checked={data.isDone}
        onChange={onToggle}
        data-item-id={data.id}
      />
      {data.title}
      <div>
        <span className="trash">
          <Trash size={22} color="#e90a0c" onClick={onDelete} />
        </span>
      </div>
    </div>
  );
};
export default TodoItem;
