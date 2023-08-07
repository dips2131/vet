import DatePicker from 'react-datepicker';
import { useState } from 'react';
const DefaultDatepicker = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    
    return (
      <DatePicker selected={startDate} onChange={() => setStartDate(Date)} className="form-control h-18" style={{'z-index':3}}/>
    );
  };

DefaultDatepicker.defaultProps = {
  onChangeDate: () => {}
}
export default DefaultDatepicker
