import { useState } from "react";
import Button from "../button";
import { IKeyboard } from "../type";
import "./keyboard.css";

const Keyboard = (props: IKeyboard) => {
  const [expression, setExpression] = useState("");
  const { screen, setScreen } = props;

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operators = ["+", "-"];

  const isNumber = (symbol: string) => numbers.includes(symbol);
  const isOperators = (symbol: string) => operators.includes(symbol);
  const isValidExpression = (exp: string) => /^\d+([+-]\d+)+$/.test(exp);

  const handleButtonClick = (symbol: string) => {
    console.log(`Button with symbol "${symbol}" clicked!`);

    if (isNumber(symbol)) {
      if (screen.includes("=")) {
        setExpression("" + symbol);
        setScreen("" + symbol);
      } else {
        setExpression(expression + symbol);
        setScreen(expression + symbol);
      }
    } else if (isOperators(symbol) && expression.length != 0) {
      if (isOperators(expression.charAt(expression.length - 1))) {
        setExpression(expression.slice(0, -1) + symbol);
        setScreen(expression.slice(0, -1) + symbol);
      } else {
        setExpression(expression + symbol);
        setScreen(expression + symbol);
      }
    } else {
      if (isValidExpression(expression)) {
        setExpression(expression);
        setScreen(expression + " = " + eval(expression));
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
