import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({updateRegisterModalToShow,updateLoginModalToShow}) => {
  const [inputValue,SetInputValue] = useState({});
  const onChangeInputHandler = (event) => {
    console.log(event.target.name,":",event.target.value);
    SetInputValue((curValue) => {
        return {...curValue,[event.target.name] :event.target.value};
    });
  }
  const onSubmitRegisterFormHandler = () => {
    console.log("submitted",inputValue)
    updateRegisterModalToShow(false);
  }
  const navigateToRegister = () => {
    updateRegisterModalToShow(false);   
    updateLoginModalToShow(true); 
  };
    return (
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-12 mx-auto">
              <div className="auth-form-light text-left py-2 px-sm-5">
                {/* <div className="brand-logo">
                  <img src={require("../../assets/images/logo.png")} alt="logo" />
                </div> */}
                <h2 className="welcome-text">VetPet <span className="text-black fw-bold">Care</span></h2>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                {/* <form className="pt-3"> */}
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg py-0" id="Username" name='Username' placeholder="Username" onChange={onChangeInputHandler} />
                  </div>
                  <div className="form-group">
                    <input type='tel' className="form-control form-control-lg py-0" id="MobileNumber" name="MobileNumber" placeholder="Mobile Number" onChange={onChangeInputHandler}/>
                  </div>
                  {/* <div className="form-group">
                    <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                      <option>Country</option>
                      <option>United States of America</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                      <option>Germany</option>
                      <option>Argentina</option>
                    </select>
                  </div> */}
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg py-0" id="Password" name="Password" placeholder="Password" onChange={onChangeInputHandler}/>
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    {/* <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/" onClick={onSubmitRegisterFormHandler}>SIGN UP</Link> */}
                    <button className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn' onClick={onSubmitRegisterFormHandler}>Register</button>
                    {/* <input type="submit" value="Submit" /> */}
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <span className="text-primary" onClick={navigateToRegister}>Login</span>
                  </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
    )
}

export default Register
