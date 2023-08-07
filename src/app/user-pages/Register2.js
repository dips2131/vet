import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../Components/Forms/RegisterForm';

export class Register2 extends Component {
  render() {
    return (
      <div>
        <div className="d-flex align-items-stretch auth auth-img-bg h-100">
          <div className="row flex-grow">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="auth-form-transparent text-left p-3">
                <RegisterForm />
              </div>
            </div>
            <div className="col-lg-6 register-half-bg d-flex flex-row">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register2
