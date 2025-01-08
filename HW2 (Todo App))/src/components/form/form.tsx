import { IForm, Task } from "../../type";
import "./form.css";
import React from "react";

const Form = (props: IForm) => {
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
      console.log(newTask)
    }
  };
  return (
    <form className="block" onSubmit={handelSubmit}>
      <div className="todo">
        <input type="text" name="task" placeholder="Type Todo here..." />
      </div>
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
