import Button from "../button";
import "./keyboard.css";

const Keyboard = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operators = ["+", "-"];

  return (
    <div className="keyboard">
      {numbers.map((num) => (
        <Button color="#4563ab" symbol={num} key={num} />
      ))}
      {operators.map((op) => (
        <Button color="#e59d59" symbol={op} key={op} />
      ))}

      <Button color="#55ac68" symbol="=" special key="=" />
    </div>
  );
};

export default Keyboard;
