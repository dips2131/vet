import DatePicker from "react-datepicker";
import { useState } from "react";
const DaterangePicker = ({startDate,onChangeStartDate,endDate,onChangeEndDate}) => {
    // const [startDate, setStartDate] = useState(new Date());
  
    // const [endDate, setEndDate] = useState(new Date());
  
    return (
      <div className="daterange-picker col-10 col-md-10 mb-0">
        <DatePicker
          selected={startDate}
          onChange={(date) => onChangeStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="form-control"
        />
        <span className="range-seperator mx-md-5"> to </span>
        <DatePicker
          selected={endDate}
          onChange={(date) => onChangeEndDate(date)}
          selectsEnd
          endDate={endDate}
          minDate={startDate}
          className="form-control"
        />
      </div>
    );
  };

  export default DaterangePicker;