import React from 'react'

const PetCareNav = () => {
  return (
    <div className='d-flex gap-2 justify-content-between navbar container border border-2 border-primary'>
        <ul> 
        <li className="nav-item font-weight-semibold  ms-0 ">
            <img src={require("../../assets/images/vetPet_care_logo.png")} alt="user" className="col-1"/>
            </li>
        </ul>
        <ul>
            <li>PetVetCare</li>
        </ul>
        <ul className='d-flex gap-2 navbar-nav"'>
            <li className='nav-item font-weight-semibold d-none d-lg-block ms-0 '>certificate</li>
            <li className='nav-item font-weight-semibold d-none d-lg-block ms-0'>Pet history</li>
            <li className='nav-item font-weight-semibold d-none d-lg-block ms-0'>notification</li>
        </ul>
    </div>
  )
}

export default PetCareNav