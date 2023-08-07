import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Login = ({updateLoginModalToShow,updateRegisterModalToShow}) => {
  const [inputValue,SetInputValue] = useState({});
  const onChangeInputHandler = (event) => {
    console.log(event.target.name,":",event.target.value);
    SetInputValue((curValue) => {
        return {...curValue,[event.target.name] :event.target.value};
    });
  }
  const onSubmitLoginFormHandler = (e) => {
    e.preventDefault();
    console.log("submitted",inputValue)
    updateLoginModalToShow(false);
  }
  const navigateToRegidterModal =  () => {
    updateLoginModalToShow(false);
    updateRegisterModalToShow(true);
  }
    return (
         <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-12 mx-auto">
              <div className="auth-form-light text-left py-2 px-0 px-sm-5">
                {/* <div className="brand-logo">
                  <img src={require("../../assets/images/logo.png")} alt="logo" />
                </div> */}
                <h2 className="welcome-text">VetPet <span className="text-black fw-bold">Care</span></h2>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="text" placeholder="Username" name="Username" size="xs" className="h-auto" onChange={onChangeInputHandler}/>
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Password" name="Password" size="xs" className="h-auto" onChange={onChangeInputHandler}/>
                  </Form.Group>
                  <div className="mt-3">
                    {/* <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">SIGN IN</Link> */}
                     <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                     onClick={e => onSubmitLoginFormHandler(e)}
                     >SIGN IN</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="ti-facebook me-2"></i>Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <span
                     className="text-primary"
                     onClick={navigateToRegidterModal}
                     >Create</span>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
    )
  }

export default Login
