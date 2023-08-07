import React from 'react'

const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
  <input
    type="text"
    value={value}
    placeholder="mm/dd/yyyy"
    onClick={onClick}
    ref={ref}
    className='col-md-12 py-1 px-0'
  />
));

export default CustomDateInput