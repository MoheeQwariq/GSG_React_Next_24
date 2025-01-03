import "./todoDate.css";

const TodoDate = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="created">02</div>
        <div>Created tasks</div>
      </div>
      <div className="box">
        <div className="completed">01</div>
        <div>Completed tasks</div>
      </div>
    </div>
  );
};
export default TodoDate;
