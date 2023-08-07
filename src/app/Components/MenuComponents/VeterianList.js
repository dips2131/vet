import React, { Component } from 'react'
// import VeterianBioModal from '../modals/VeterianBioModal';

const VeterianList = ({updateSelectedVeterian,onClickAppointmentRequestHandler}) => {
     const veterianList = [
      { Name: "Sampath", specialization : "Dogs" },
      { Name: "Vino", specialization : "cattle" },
      { Name: "Jhon", specialization : "Dogs" },
    ];

  return (
    <div className="table-responsive">
     {/* <VeterianBioModal selectedVeterianBioModalToShow={this.state.selectedVeterianBioModalToShow} updateSelectedVeterianBioModalToShow={this.updateSelectedVeterianBioModalToShow} veterianInfo={veterianInfo}/> */}
    <table className="table">
      <thead>
        <tr>
          <th className="pt-3 pl-0">
            Veterian
          </th>
          <th className="pt-3">
          specialization 
          </th>
          <th className="pt-3">
            Appointment
          </th>
        </tr>
      </thead>
      <tbody>
        {veterianList.map((item) => {
          return (
            <tr>
              <td className="py-1 pl-0">
                <div className="d-flex align-items-center">
                  <img
                    src={require("../../../assets/images/faces/face1.jpg")}
                    alt="profile"
                  />
                  <div className="ms-3">
                    <p className="mb-0 cursor-pointer"
                    onClick={() => updateSelectedVeterian(item)}
                    >{item?.Name}</p>
                    <p className="mb-0 text-muted text-small">
                       BVSc
                    </p>
                  </div>
                </div>
              </td>
              <td>{item?.specialization }</td>
              <td>
                <label
                  className="badge badge-success"
                  onClick={() => onClickAppointmentRequestHandler(item)}
                >
                  Book Appointment
                </label>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
 }

export default VeterianList