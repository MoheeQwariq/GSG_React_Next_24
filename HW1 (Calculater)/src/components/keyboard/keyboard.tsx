import Button from "../button/button";
import "./keyboard.css";
const Keyboard = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operators = ["+", "-"];
  return (
    <div className="keyboard">
      {numbers.map((num) => (
        <Button color="#4563ab" symbol={num} height="100px" key={num} width="100px"/>
      ))}
      {operators.map((op) => (
        <Button color="#e59d59" symbol={op} height="100px" key={op} width="100px"/>
      ))}

      <Button color="#55ac68" symbol="=" height="110px" key="=" width="400px"/>
    </div>
  );
};

export default Keyboard;
