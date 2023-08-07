import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import bsCustomFileInput from "bs-custom-file-input";
import DaterangePicker from "../SubsidiaryComponents/DaterangePicker";


const VaccinationForm = ({ updateVaccinationModalToShow }) => {
  const [inputValue, SetInputValue] = useState({});
  const [uploadedFile,setUplodedFile] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const PetKindOptions = [
    { id: 1, label: "Cow" },
    { id: 2, label: "Dog" },
  ];
  const recurringOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const recurringTypes = ["weekly", "monthly", "yearly"];
  const veterianList = [
    { Name: "Sampath", specialization : "Dogs" },
    { Name: "Vino", specialization : "cattle" },
    { Name: "Jhon", specialization : "Dogs" },
  ];
  useEffect(() => {
    bsCustomFileInput.init();
  }, []);
  const onChangeInputHandler = (event) => {
    SetInputValue((curValue) => {
      return { ...curValue, [event.target.name]: event.target.value };
    });
  };
  const onSubmitLoginFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file',uploadedFile);
    console.log("submitted", inputValue);
    updateVaccinationModalToShow(false);
  };
  const onChangePetDropdownHandler = (value) => {
    SetInputValue((curValue) => {
      return { ...curValue, PetKind: value };
    });
  };
  const onChangeRecurrenceTimeHandler = (value) => {
    SetInputValue((curValue) => {
      return { ...curValue, RecurrenceTime: value };
    });
  };
  const onChangeVeterianHandler = (value) => {
    console.log(value)
    SetInputValue((curValue) => {
      return { ...curValue, Veterian: value };
    });
  };
  const onChangeRecurrenceTypeHandler = (value) => {
    SetInputValue((curValue) => {
      return { ...curValue, RecurrenceType: value };
    });
  };
  const onChangeStartDate = (date) => {
    setStartDate(date);
    SetInputValue((curValue) => {
      return { ...curValue, StartDate: date };
    });
  };
  const onChangeEndDate = (date) => {
    setEndDate(date);
    SetInputValue((curValue) => {
      return { ...curValue, EndDate: date };
    });
  };
  const cancelVaccinationform = (e) => {
    e.preventDefault();
    updateVaccinationModalToShow(false);
  };
  const onChangeFileUpload = (e) => {
    console.log(e.target.files[0]);
    setUplodedFile(e.target.files[0]);
    console.log("function calles for file uploading");
  };
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-title mx-auto">Monday-staturday 10am - 8pm</p>
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
              Phone No
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
            <label htmlFor="PetType" className="col-sm-3 col-form-label">
              Pet Category
            </label>
            <div className="col-sm-9 my-auto">
              <Dropdown onSelect={onChangePetDropdownHandler}>
                <Dropdown.Toggle
                  variant="btn btn-outline-primary py-2"
                  id="PetType"
                  name="PetType"
                >
                  {inputValue?.PetKind ? inputValue?.PetKind : "Select"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {PetKindOptions.map((item) => {
                    return (
                      <Dropdown.Item key={item?.id} eventKey={item?.label}>
                        {item?.label}
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
          <Form.Group className="row form-group">
            <label className="col-sm-3 col-form-label">Gender</label>
            <div className="col-sm-4">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="Gender"
                    id="GenderOne"
                    value="Male"
                    onClick={(e) => onChangeInputHandler(e)}
                  />{" "}
                  Male
                  <i className="input-helper"></i>
                </label>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="Gender"
                    value="Female"
                    id="GenderTwo"
                    onClick={(e) => onChangeInputHandler(e)}
                  />{" "}
                  Female
                  <i className="input-helper"></i>
                </label>
              </div>
            </div>
          </Form.Group>
         <Form.Group className="row">
              <label htmlFor="veterian" className="col-sm-3 col-form-label">
                Veterian
              </label>
              <div className="col-sm-9 my-auto">
              <Dropdown onSelect={onChangeVeterianHandler}>
                <Dropdown.Toggle
                  variant="btn btn-outline-primary py-2"
                  id="veterian"
                >
                  {inputValue?.Veterian
                    ? inputValue?.Veterian
                    : "Select"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {veterianList.map((item, idx) => {
                    return (
                      <Dropdown.Item key={idx} eventKey={item.Name}>
                        {item.Name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            </Form.Group>
          <Form.Group className="row">
            <label className="col-sm-3 col-form-label">File upload</label>
            <div className="custom-file d-inline col-md-6 col-sm-6 px-3 pt-2">
              <Form.Control
                type="file"
                className="form-control d-none"
                id="customFileLang"
                lang="es"
                onChange={onChangeFileUpload}
              />
              <label className="custom-file-label" htmlFor="customFileLang">
                Upload image
              </label>
            </div>
          </Form.Group>
          <div className="row">
            <div className="row">
              <div className="col-12 grid-margin stretch-card mb-0">
                <div className="card">
                  <div className="card-body ps-0 py-0">
                    <h4 className="card-title">Shedule-Vaccine</h4>
                    <p className="card-description">choose the time span </p>
                    <DaterangePicker startDate={startDate} onChangeStartDate={onChangeStartDate} endDate={endDate} onChangeEndDate={onChangeEndDate} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Form.Group className="row">
          <Form.Group className="row col-md-7 m-0 p-0">
            <label
              htmlFor="RecurrenceType"
              className="col-sm-3 col-form-label col-md-6"
            >
              Recurrence type
            </label>
            <div className="col-sm-4 col-md-5 p-0 ps-0 my-auto px-sm-2">
              <Dropdown onSelect={onChangeRecurrenceTypeHandler}>
                <Dropdown.Toggle
                  variant="btn btn-outline-primary py-2"
                  id="RecurrenceType"
                >
                  {inputValue?.RecurrenceType
                    ? inputValue?.RecurrenceType
                    : "Select"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {recurringTypes.map((item, idx) => {
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
          <Form.Group className="row col-md-5 m-0 px-0 ps-sm-3">
            <label
              htmlFor="RecurrenceTime"
              className="col-sm-3 col-md-5 px-0 col-form-label"
            >
              Recurrence
            </label>
            <div className="col-sm-3 col-md-6 p-0 my-auto">
              <Dropdown onSelect={onChangeRecurrenceTimeHandler}>
                <Dropdown.Toggle
                  variant="btn btn-outline-primary py-2"
                  id="RecurrenceTime"
                >
                  {inputValue?.RecurrenceTime
                    ? inputValue?.RecurrenceTime
                    : "Select"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {recurringOptions.map((item) => {
                    return (
                      <Dropdown.Item key={item} eventKey={item}>
                        {item}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Form.Group>
          </Form.Group>
          <Form.Group className="row">
            <label
              htmlFor="AlertMobileNumber"
              className="col-sm-3 col-form-label"
            >
              Alert Ph No
            </label>
            <div className="col-sm-9">
              <Form.Control
                type="text"
                className="form-control py-2"
                id="AlertMobileNumber"
                name="AlertMobileNumber"
                placeholder="Mobile number"
                onChange={onChangeInputHandler}
              />
            </div>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary  me-2"
              onClick={(e) => onSubmitLoginFormHandler(e)}
            >
              Confirm
            </button>
            <button
              className="btn btn-light"
              onClick={(e) => cancelVaccinationform(e)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VaccinationForm;
