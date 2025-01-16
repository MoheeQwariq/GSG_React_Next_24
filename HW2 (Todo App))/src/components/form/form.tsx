import { IForm, Task } from "../../type";
import "./form.css";
import React, { useState } from "react";

const Form = (props: IForm) => {
  const [error, setError] = useState<string>(""); 
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title: string = e.currentTarget["task"].value;
    const isUrgent: boolean = e.currentTarget["urgent"].checked;
    if (title.length > 3) {
      const newTask: Task = {
        id: Date.now(),
        title,
        isUrgent,
        isDone: false,
      };
      props.onSubmit(newTask);
      e.currentTarget["task"].value = '';
      e.currentTarget["urgent"].checked = false
      setError(""); 
    }
    else
    setError("Task title must be more than 3 characters.");
    
  };
  return (
    <form className="block" onSubmit={handelSubmit}>
      <div className="todo">
        <input type="text" name="task" placeholder="Type Todo here..." />
      </div>
      {error && <p className="error">{error}</p>}
      <div className="urgent">
        <label htmlFor="urgent">Urgent</label>
        <input type="checkbox" id="urgent" name="urgent"/>
      </div>
      <div>
        <input className="butt" type="submit" value="Add Todo" />
      </div>
    </form>
  );
};

export default Form;
