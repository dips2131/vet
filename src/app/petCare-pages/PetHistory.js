import React, { Component } from 'react'
import SheduledVisitReviewModal from '../modals/SheduledVisitReviewModal';
import SheduledVaccineReviewModal from '../modals/SheduledVaccineReviewModal';
import VisitHistoryTab from '../Components/PrimaryComponents/VisitHistoryTab';
class PetHistory extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          shedularVisitReviewModalToShow: false, 
          sheduledVaccineReviewModalToShow: false,
        }
        this.updateShedularVisitReviewModalToShow = this.updateShedularVisitReviewModalToShow.bind(this);
        this.updateSheduledVaccineReviewModalToShow = this.updateSheduledVaccineReviewModalToShow.bind(this);
    }
    updateShedularVisitReviewModalToShow (value) {
      this.setState({shedularVisitReviewModalToShow: value});
    }
    updateSheduledVaccineReviewModalToShow (value) {
      this.setState({sheduledVaccineReviewModalToShow : value});
    }
  render() {
    return (
        <div className='container' style={{width:"100vw"}}>
          <div className='card mx-auto col-md-6 col-10 pb-5 bg-transparent' >  
          {/* <div className='card-body' > */}
             {/* <div className='d-flex gap-3 justify-content-end w-100'>
                <button 
                 className="btn btn-light p-1 p-sm-2 p-lg-2" 
                 onClick={() => this.updateShedularVisitReviewModalToShow(true)}
                   >
                  shedular
                </button>
                <button 
                 className="btn btn-light p-1 p-sm-2 p-lg-2" 
                 onClick={() => this.updateSheduledVaccineReviewModalToShow(true)}
                   >
                  Vaccine
                </button>
             </div> */}
              {/* <div className='d-flex flex-column pt-5 col-md-6 mx-auto bg-transparent'>
              <h4>Pet Name : walter</h4>
              <h4>Breed : German shephard </h4>
              <h4>Age : 3</h4>
              <h4>Gender :Male</h4>
              </div>
          </div> */}
         <div className="card bg-transparent">
              <div className="card-body border border-primary">
                <div className="d-sm-flex flex-row flex-wrap text-center text-sm-left align-items-center justify-content-evenly">
                  <img src={require("../../assets/images/faces/face11.jpg")} className="img-lg rounded" alt="profile icon" />
                  <div className="ms-xl-3 mt-2 mt-xl-0 ms-5 text-start">
                    {/* <h6 className="text-dark">Maria</h6>
                    <p className="text-muted">maria@gmail.com</p> */}
                    <h6 className="text-dark">Pet Name : walter</h6>
                    <h6 className="text-dark">Breed : German shephard </h6>
                    <h6 className="text-dark">Age : 3</h6>
                    <h6 className="text-dark">Gender :Male</h6>
                    {/* <p className="mt-2 text-success font-weight-bold">Designer</p> */}
                  </div>
                </div>
              </div>
            </div>
          <SheduledVisitReviewModal shedularVisitReviewModalToShow={this.state.shedularVisitReviewModalToShow} updateShedularVisitReviewModalToShow={this.updateShedularVisitReviewModalToShow}/>
          <SheduledVaccineReviewModal sheduledVaccineReviewModalToShow={this.state.sheduledVaccineReviewModalToShow} updateSheduledVaccineReviewModalToShow={this.updateSheduledVaccineReviewModalToShow} />
        </div>
        <div>
          {/* <h2>Visits - no. of visits</h2> */}
          <div className=''>
            <div className="col-md-12 grid-margin">
            <div className="card bg-transparent">
              <div className="card-body">
                <div className="card-body">
									<h4 className="card-title">Visits - no. of visits</h4>
									<ul className="bullet-line-list">
										<li>
											<h6>User confirmation</h6>
											<p>Lorem Ipsum is simply dummy text of the printing </p>
											<p className="text-muted mb-4">
												<i className="ti-time"></i>
												7 months ago.
											</p>
										</li>
										<li>
											<h6>Continuous evaluation</h6>
											<p>Lorem Ipsum is simply dummy text of the printing </p>
											<p className="text-muted mb-4">
												<i className="ti-time"></i>
												7 months ago.
											</p>
										</li>
										<li>
											<h6>Promotion</h6>
											<p>Lorem Ipsum is simply dummy text of the printing </p>
											<p className="text-muted">
												<i className="ti-time"></i>
												7 months ago.
											</p>
										</li>
                    <li>
											<h6>Visit Shedule</h6>
											<p>Lorem Ipsum is simply dummy text of the printing </p>
											<p className="text-muted">
												<i className="ti-time"></i>
												7 months ago.
											</p>
										</li>
                    <li>
											<h6>Vaccine Shedule</h6>
											<p>Lorem Ipsum is simply dummy text of the printing </p>
											<p className="text-muted">
												<i className="ti-time"></i>
												7 months ago.
											</p>
										</li>
									</ul>
								</div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      )
  }
}

export default PetHistory