import "./form.css";

const Form = () => {
  return (
    <form className="block">
      <div className="todo">
        <input type="text" name="label" placeholder="Type Todo here..." />
      </div>
      <div className="urgent">
        <label htmlFor="urgent">Urgent</label>
        <input type="checkbox" id="urgent" />
      </div>
      <div>
        <input className="butt" type="submit" value="Add Todo" />
      </div>
    </form>
  );
};

export default Form;
