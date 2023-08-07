import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [inputValue, SetInputValue] = useState({});
  const history = useHistory();
  const onChangeInputHandler = (event) => {
    console.log(event.target.name, ":", event.target.value);
    SetInputValue((curValue) => {
      return { ...curValue, [event.target.name]: event.target.value };
    });
  };
  const onSubmitLoginFormHandler = (e) => {
    e.preventDefault();
    console.log("submitted", inputValue);
    history.push("/");
    //   updateRegisterModalToShow(false);
  };
  const navigateToRegister = () => {
    history.push("/register2");
    //   updateRegisterModalToShow(false);
    //   updateLoginModalToShow(true);
  };
  return (
    <div>
      <div className="brand-logo">
        <img src={require("../../../assets/images/logo.png")} alt="logo" />
      </div>
      <h4>Welcome back!</h4>
      <h6 className="font-weight-light">Happy to see you again!</h6>
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
              id="exampleInputEmail"
              placeholder="Username"
              name="Username"
              onChange={onChangeInputHandler}
            />
          </div>
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
        <div className="my-2 d-flex justify-content-between align-items-center">
          <div className="form-check">
            <label className="form-check-label text-muted">
              <input type="checkbox" className="form-check-input" />
              <i className="input-helper"></i>
              Keep me signed in
            </label>
          </div>
          <a
            href="!#"
            onClick={(event) => event.preventDefault()}
            className="auth-link text-black"
          >
            Forgot password?
          </a>
        </div>
        <div className="my-3">
          <button
            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
            onClick={onSubmitLoginFormHandler}
          >
            LOGIN
          </button>
        </div>
        <div className="mb-2 d-flex">
          <button
            type="button"
            className="btn btn-facebook auth-form-btn flex-grow me-1"
          >
            <i className="ti-facebook me-2"></i>Facebook
          </button>
          <button
            type="button"
            className="btn btn-google auth-form-btn flex-grow ms-1"
          >
            <i className="ti-google me-2"></i>Google
          </button>
        </div>
        <div className="text-center mt-4 font-weight-light">
          Don't have an account?{" "}
          <Link to="/register-2" className="text-primary">
            Create
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
