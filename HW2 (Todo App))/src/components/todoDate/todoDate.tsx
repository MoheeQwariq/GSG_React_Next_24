import { ITodoDate } from "../../type";
import "./todoDate.css";

const TodoDate = (props: ITodoDate) => {
  const urgentCount = props.items.filter((item) => item.isUrgent).length;
  const completedCount = props.items.filter((item) => item.isDone).length;

  return (
    <div className="container">
      <div className="box">
        <div className="count">{props.items.length}</div>
        <div>Created tasks</div>
      </div>
      <div className="box">
        <div className="count">{urgentCount}</div>
        <div>Urgent tasks</div>
      </div>
      <div className="box">
        <div className="count">{completedCount}</div>
        <div>Completed tasks</div>
      </div>
    </div>
  );
};
export default TodoDate;
