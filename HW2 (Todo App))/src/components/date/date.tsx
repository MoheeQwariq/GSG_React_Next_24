import "./date.css";
import { format } from 'date-fns';

const DateBlock = () => {
  const currentDate = new Date();
  const day = format(currentDate, 'EEEE, ');
  const formattedDate = format(currentDate,'dd MMM'); 
 
  return (
    <div className="date">
      <span className="day">{day}&nbsp;</span>{formattedDate}
    </div>
  );
};

export default DateBlock;
