import { IResult } from "../../type";
import "./result.css";

const Result = (props: IResult) => {
  const { screen } = props;

  if (screen.includes("=")) {
    const str = screen.split("=");
    return (
      <div className="onScreen">
        {str[0]}&nbsp;=&nbsp;<span className="result">{str[1]}</span>{" "}
      </div>
    );
  }
  return <div className="onScreen">{screen}</div>;
};
export default Result;
