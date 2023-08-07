import React, { useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const AppointmentForm = ({updateAppointmentFormToShow}) => {
  const [inputValue,SetInputValue] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  
  const petCategory = ["Dog","Cattle"]
  const onChangeInputHandler = (event) => {
    console.log(event.target.name,":",event.target.value);
    SetInputValue((curValue) => {
        return {...curValue,[event.target.name] :event.target.value};
    });
  }
  const onSubmitAppointmentFormHandler = (e) => {
    e.preventDefault();
    console.log("submitted",inputValue);
    updateAppointmentFormToShow(false)
  }
  const onChangeStartDate = (date) => {
    console.log(date);
    setStartDate(date)
    SetInputValue((curValue)=>{
      return {...curValue,StartDate : date};
    })
  }
  const onChangePetCategoryHandler = (value) => {
    SetInputValue((curValue)=>{
      return {...curValue,petCategory : value};
    })
  }
  const cancelBookingAppoinment = (e) => {
    e.preventDefault();
    updateAppointmentFormToShow(false);
  }
    return (
      <div className="card">
      <div className="card-body">
        {/* <h4 className="card-title">Appointment Form</h4> */}
        <form className="forms-sample">
        <Form.Group className="row">
              <label htmlFor="GaurdianName" className="col-sm-3 col-form-label">
                Owner Name
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="text"
                  className="form-control py-2"
                  id="GaurdianName"
                  name="GaurdianName"
                  placeholder="name"
                  onChange={onChangeInputHandler}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="MobileNumber" className="col-sm-3 col-form-label">
                Phone Number
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="text"
                  className="form-control py-2"
                  id="MobileNumber"
                  name="MobileNumber"
                  placeholder="Mobile Number"
                  onChange={onChangeInputHandler}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="PetName" className="col-sm-3 col-form-label">
                Pet Name
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="text"
                  className="form-control py-2"
                  id="PetName"
                  name="PetName"
                  placeholder="Pet Name"
                  onChange={onChangeInputHandler}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label
                htmlFor="exampleInputUsername2"
                className="col-sm-3 col-form-label"
              >
                Pet Category
              </label>
              <div className="col-sm-9 my-auto">
                <Dropdown onSelect={onChangePetCategoryHandler}>
                  <Dropdown.Toggle
                    variant="btn btn-outline-primary py-2"
                    id="dropdownMenuOutlineButton1"
                  >
                    {inputValue?.petCategory
                      ? inputValue?.petCategory
                      : "Select"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {petCategory.map((item,idx) => {
                      return (
                        <Dropdown.Item key={idx} eventKey={item}>
                          {item}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="PetAge" className="col-sm-3 col-form-label">
                Pet Age
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="text"
                  className="form-control py-2"
                  id="PetAge"
                  name="PetAge"
                  placeholder="Pet Age"
                  onChange={onChangeInputHandler}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="PetAge" className="col-sm-3 col-form-label">
                Pet Gender
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="text"
                  className="form-control py-2"
                  id="PetGender"
                  name="PetGender"
                  placeholder="Pet Gender"
                  onChange={onChangeInputHandler}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="PetAge" className="col-sm-3 col-form-label">
                Vet
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="text"
                  className="form-control py-2"
                  id="Veterian"
                  name="Veterian"
                  placeholder="Veterian"
                  onChange={onChangeInputHandler}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="NatureOfVisit" className="col-sm-3 col-form-label">
                Reason/Problem
              </label>
              <div className="col-sm-9">
                <Form.Control
                  type="text"
                  className="form-control py-2"
                  id="NatureOfVisit"
                  name="NatureOfVisit"
                  placeholder="Nature of Visit"
                  onChange={onChangeInputHandler}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label
                htmlFor="exampleInputUsername3"
                className="col-sm-3 col-form-label"
              >
                Date of Appoinment
              </label>
              <div className="d-flex gap-2 col-sm-9 py-0">
                <DatePicker
                  selected={startDate}
                  onChange={onChangeStartDate}
                  className="form-control h-18"
                  style={{ "z-index": 3 }}
                />
              </div>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary  me-2"
                onClick={(e) => onSubmitAppointmentFormHandler(e)}
              >
                Book
              </button>
              <button 
               className="btn btn-light"
               onClick={(e) => cancelBookingAppoinment(e)}
              >Cancel</button>
            </div>
        </form>
      </div>
    </div>
      )
 }

export default AppointmentForm