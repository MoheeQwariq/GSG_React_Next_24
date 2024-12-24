import { IButton } from "../type";
import "./button.css";

const Button = (props: IButton) => {
  const { symbol, color, special = false } = props;
  const style = {
    backgroundColor: color,
    width: special ? "360px" : "100px",
    height: special ? "110px" : "100px",
  };

  return (
    <div style={style} className="button">
      {symbol}
    </div>
  );
};

export default Button;
