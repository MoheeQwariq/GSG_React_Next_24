import { IKeyboard } from "../../type";
import Button from "../button";
import "./keyboard.css";

const Keyboard = (props: IKeyboard) => {
  const { screen, setScreen } = props;

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operators = ["+", "-"];

  const isNumber = (symbol: string) => numbers.includes(symbol);
  const isOperators = (symbol: string) => operators.includes(symbol);
  const isValidExpression = (exp: string) => /^-?\d+([+-]\d+)+$/.test(exp);

  console.log(screen);

  const handleButtonClick = (symbol: string) => {
    console.log(`Button with symbol "${symbol}" clicked!`);

    if (isNumber(symbol)) {
      if (screen.includes("=")) {
        setScreen(symbol);
      } else {
        setScreen(screen + symbol);
      }
    } else if (isOperators(symbol) && screen.length != 0) {
      if (isOperators(screen.charAt(screen.length - 1))) {
        setScreen(screen.slice(0, -1) + symbol);
      } else {
        if (screen.includes("=")) {
          const res = screen.split("=");
          setScreen(res[1] + symbol);
        } else setScreen(screen + symbol);
      }
    } else {
      if (isValidExpression(screen)) {
        setScreen(screen + "=" + eval(screen));
      }
    }
  };
  return (
    <div className="keyboard">
      {numbers.map((num) => (
        <Button
          color="#4563ab"
          symbol={num}
          key={num}
          onClick={handleButtonClick}
        />
      ))}
      {operators.map((op) => (
        <Button
          color="#e59d59"
          symbol={op}
          key={op}
          onClick={handleButtonClick}
        />
      ))}

      <Button
        color="#55ac68"
        symbol="="
        special
        key="="
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default Keyboard;
