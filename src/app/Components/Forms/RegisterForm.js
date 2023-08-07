import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const [inputValue, SetInputValue] = useState({});
  const history = useHistory();
  const onChangeInputHandler = (event) => {
    console.log(event.target.name, ":", event.target.value);
    SetInputValue((curValue) => {
      return { ...curValue, [event.target.name]: event.target.value };
    });
  };
  const onSubmitRegisterFormHandler = (e) => {
    e.preventDefault();
    console.log("submitted", inputValue);
    history.push('/');
    //   updateRegisterModalToShow(false);
  };
  const navigateToRegister = () => {
    //   updateRegisterModalToShow(false);
    //   updateLoginModalToShow(true);
  };
  return (
    <div>
      <div className="brand-logo">
        <img src={require("../../../assets/images/logo.png")} alt="logo" />
      </div>
      <h4>New here?</h4>
      <h6 className="font-weight-light">
        Join us today! It takes only few steps
      </h6>
      <form className="pt-3">
        <div className="form-group">
          <label>Username</label>
          <div className="input-group">
            <div className="input-group-prepend bg-transparent">
              <span className="input-group-text bg-transparent border-right-0">
                <i className="ti-user text-primary"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control-lg border-left-0"
              placeholder="Username"
              name="Username"
              onChange={onChangeInputHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <div className="input-group">
            <div className="input-group-prepend bg-transparent">
              <span className="input-group-text bg-transparent border-right-0">
                <i className="ti-email text-primary"></i>
              </span>
            </div>
            <input
              type="email"
              className="form-control form-control-lg border-left-0"
              placeholder="Email"
              name="Email"
              onChange={onChangeInputHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Country</label>
          <select
            className="form-control form-control-lg"
            id="exampleFormControlSelect2"
            name="Country"
            onChange={onChangeInputHandler}
          >
            <option>Country</option>
            <option>United States of America</option>
            <option>United Kingdom</option>
            <option>India</option>
            <option>Germany</option>
            <option>Argentina</option>
          </select>
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="input-group">
            <div className="input-group-prepend bg-transparent">
              <span className="input-group-text bg-transparent border-right-0">
                <i className="ti-lock text-primary"></i>
              </span>
            </div>
            <input
              type="password"
              className="form-control form-control-lg border-left-0"
              id="exampleInputPassword"
              placeholder="Password"
              name="Password"
              onChange={onChangeInputHandler}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="form-check">
            <label className="form-check-label text-muted">
              <input type="checkbox" className="form-check-input" />
              <i className="input-helper"></i>I agree to all Terms & Conditions
            </label>
          </div>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
            onClick={onSubmitRegisterFormHandler}
          >
            SIGN UP
          </button>
        </div>
        <div className="text-center mt-4 font-weight-light">
          Already have an account?{" "}
          <Link to="/login-2" className="text-primary">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
