import React, { Component, useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { Link,Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { ParentContext } from '../contexts/context';
const Navbar = (props) => {
   const history = useHistory();
   console.log(history);
   const menuModalToshow = useContext(ParentContext);
   console.log(menuModalToshow);
    const handleHomeNavigate = () => {
      console.log('navigate',history);
      // ParentContext.setValue("home");
     props?.updateMenuToShow("Home")
      history.push('/');
    }
    const logoStyle = {
      width: "3rem",
      height:"3rem",
      cursor: "pointer",
    }
   
    return (
      <nav className="col-lg-12 col-12 p-0 d-flex flex-row" style={{height:"4rem"}}>
        <div className="d-flex align-items-center justify-content-between w-100 mx-4" style={{height:"4rem"}}>
           <ul className="navbar-nav d-flex">
            <li className="nav-item d-lg-block ms-0 cursor-pointer">
            {/* logo-mini.png */}
              <img src={require("../../assets/images/vetPet_care_logo.png")} alt="user" className='cursor-pointer' style={logoStyle}
              onClick={handleHomeNavigate}
              />
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
                {history.location?.pathname === "/pet-history"?
                 <h2 className="welcome-text">
                  Visit-History<span className="text-black fw-bold"></span></h2>
                 :
                 <h2 className="welcome-text">Vet~<span className="text-black fw-bold">PetCare</span></h2>
                 }
            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row navbar-nav-right">
             <li className="nav-item me-2 font-weight-semibold my-auto">
              {/* <h6 className='text-white'>Pet History</h6> */}
              {history.location?.pathname !== "/pet-history"?(
                <Link type="button" 
                 className="btn btn-light p-1 p-sm-2 p-lg-2" 
                 to="/pet-history"
                 >
                  Pet History
                </Link>
              ) : null}
              {/* {history.location?.pathname === "/pet-history"?(
                <Link type="button" 
                 className="btn btn-light p-1 p-sm-2 p-lg-2" 
                 to="/pet-history"
                 >
                  shedule
                </Link>
              ) : null} */}
             </li>
             <li className="nav-item font-weight-semibold pt-2">
              <h6 className='text-white !cursor-not-allowed'>Certificate</h6>
              </li>
          </ul>
      
          {/* <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button">
            <span className="icon-menu"></span>
          </button> */}
        </div>
      </nav>
    );
  }


export default Navbar;
