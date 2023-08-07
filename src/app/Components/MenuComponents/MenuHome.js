import React from 'react'
import SampleModal from '../sampleModal'

const MenuHome = (props) => {
  return (
    <div>
       <div className="row">
          <div className="col-md-4 grid-margin">
            <div className="card bg-facebook d-flex align-items-center cursor-pointer"  onClick={() => props?.updateShedularModalToShow(true)}>
              <div className="card-body">
                <div className="d-flex flex-row align-items-center">
                  <i className="ti-facebook text-white icon-md"></i>
                  <div className="ms-3">
                    <h6 className="text-white"> Schedule your pet visits & get alerts</h6>
                    {/* <p className="mt-2 text-white card-text">You main list growing</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin">
            <div className="card bg-linkedin d-flex align-items-center cursor-pointer" onClick={() => props?.updateVaccinationModalToShow(true)}>
              <div className="card-body">
                <div className="d-flex flex-row align-items-center">
                  <i className="ti-linkedin text-white icon-md"></i>
                  <div className="ms-3">
                    <h6 className="text-white">Schedule pet vaccines-get alerts</h6>
                    {/* <p className="mt-2 text-white card-text">You main list growing</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin">
            <div className="card bg-twitter d-flex align-items-center cursor-pointer" >
              <div className="card-body">
                <div className="d-flex flex-row align-items-center">
                  <i className="ti-twitter-alt text-white icon-md"></i>
                  <div className="ms-3">
                    <h6 className="text-white">Have questions / emergency call us</h6>
                    {/* <p className="mt-2 text-white card-text">You main list growing</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default MenuHome

// {/* <div className="row">
//           <div className="col-md-4 grid-margin">
//             <div className="card bg-facebook d-flex align-items-center">
//               <div className="card-body">
//                 <div className="d-flex flex-row align-items-center">
//                   <i className="ti-facebook text-white icon-md"></i>
//                   <div className="ms-3 py-2">
//                     <h6 className="text-white">schedule your pet visits</h6>
//                     <p></p>
//                     {/* <p className="mt-2 text-white card-text">Schedule Now</p> */}
//                     <button
//                      type="button" 
//                      className="btn btn-light py-2"
//                      onClick={() => props?.updateShedularModalToShow(true)}
//                     >
//                       Schedule Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 grid-margin">
//             <div className="card bg-linkedin d-flex align-items-center">
//               <div className="card-body">
//                 <div className="d-flex flex-row align-items-center">
//                   <i className="ti-linkedin text-white icon-md"></i>
//                   <div className="ms-3 py-2">
//                     <h6 className="text-white">Vaccine your pet in time</h6>
//                     <p></p>
//                     <button 
//                     type="button" 
//                     className="btn btn-warning py-2" 
//                     onClick={() => props?.updateVaccinationModalToShow(true)}
//                     >
//                       Vaccine
//                     </button>
//                     {/* <p className="mt-2 text-white card-text">Vaccine</p> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 grid-margin">
//             <div className="card bg-twitter d-flex align-items-center">
//               <div className="card-body">
//                 <div className="d-flex flex-row align-items-center">
//                   <i className="ti-twitter-alt text-white icon-md"></i>
//                   <div className="ms-3">
//                     <h6 className="text-white">Have Question?</h6>
//                     <p className="mt-2 text-white card-text">Emergency? Need Advise?</p>
//                     <button 
//                     type="button" 
//                     className="btn btn-danger py-2" 
//                     >
//                       Call us
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}