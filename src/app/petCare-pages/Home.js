import React, {Component} from 'react';
import VeterianList from '../Components/MenuComponents/VeterianList';
import VeterianBioCard from '../Components/SubsidiaryComponents/VeterianBioCard';
import AppointmentForm from '../Components/Forms/AppointmentForm';
import AppointmentFormModal from '../modals/AppointmentFormModal';
import RegisterModal from '../modals/RegisterModal';
import LoginModal from '../modals/LoginModal';
import AboutVeterians from '../Components/MenuComponents/AboutVeterians';
import MenuHome from '../Components/MenuComponents/MenuHome';
import PetHygien from '../Components/MenuComponents/PetHygien';
import ShedularFormModal from '../modals/ShedularFormModal';
import VaccinationFormModal from '../modals/VaccinationFormModal';
import VeterianBioModal from '../modals/VeterianBioModal';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ParentContext } from '../contexts/context';
export class Home extends Component {
    constructor(props){
      super(props)
      this.state = {
        menuModalToshow: "Home",
        selectedVeterian: null,
        appointmentFormToShow: false,
        registerModalToShow: false,
        LoginModalToShow: false,
        shedularModalToShow: false,
        vaccinationModalToShow: false,
        selectedVeterianBioModalToShow: false,
        visitSheduleDetail:{},
        vaccineSheduleDetail:{},
        appoinmentDetail:{}
      }
      this.onClickMenuHandler = this.onClickMenuHandler.bind(this);
      this.onClickAppointmentSubmitHandler = this.onClickAppointmentSubmitHandler.bind(this);
      this.onClickAppointmentRequestHandler = this.onClickAppointmentRequestHandler.bind(this);
      this.updateAppointmentFormToShow = this.updateAppointmentFormToShow.bind(this);
      this.updateRegisterModalToShow = this.updateRegisterModalToShow.bind(this);
      this.updateLoginModalToShow = this.updateLoginModalToShow.bind(this);
      this.updateShedularModalToShow = this.updateShedularModalToShow.bind(this);
      this.updateVaccinationModalToShow = this.updateVaccinationModalToShow.bind(this);
      this.updateSelectedVeterianBioModalToShow = this.updateSelectedVeterianBioModalToShow.bind(this);
      this.updateSelectedVeterian = this.updateSelectedVeterian.bind(this);
    }
    static contextType = ParentContext;  
   
    onClickMenuHandler (event,menuName) {
        event.preventDefault();
        console.log("function called",menuName);
        console.log(this.state.menuModalToshow)
        this.setState({
          menuModalToshow: menuName
        })
        // setValue(menuName);
    }
    onClickAppointmentRequestHandler (data) {
      console.log(data,this.appointmentFormToShow);
      this.setState({selectedVeterian: data});
      this.setState({appointmentFormToShow: !this.appointmentFormToShow});
    }
    onClickAppointmentSubmitHandler (data) {
      console.log(data);
      this.setState({appointmentFormToShow: false});
    }
    updateAppointmentFormToShow (value) {
     this.setState({appointmentFormToShow: value});
    }
    updateRegisterModalToShow (value) {
       console.log(value);
      this.setState({registerModalToShow : value});
    }
    updateLoginModalToShow (value) {
      this.setState({loginModalToShow : value});
    }
    updateShedularModalToShow (value) {
      
      this.setState({shedularModalToShow : value});
    }
    updateVaccinationModalToShow (value) {
      this.setState({vaccinationModalToShow : value});
    }
    updateSelectedVeterian (value) {
      console.log(value,this.state.selectedVeterian);
      // this.setState({selectedVeterian : value});
      this.setState({selectedVeterian:value });
      this.updateSelectedVeterianBioModalToShow(true);
    }
    updateSelectedVeterianBioModalToShow (value) {
      this.setState({selectedVeterianBioModalToShow : value});
    }
    // updateDetail (state,value) {
    //     this.setState
    //  }
      render() {
        const { menuToshow, updateMenuToshow } = this.context;
        console.log(menuToshow);
        const menuList = ["Veterian","About Veterians","Medicines","Info"]
        return (
            <div className='container d-flex justify-content-center position-relative mt-5 pt-5'>         
              <div className='col-12'>              
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <Link to="/register-2" className="btn btn-primary py-2">Register</Link>
                  <Link to="/login-2" className="btn btn-primary py-2">Login</Link>
                </div>
                <div className='text-center py-3 ps-2'>
                  <h2 className='text-light bg-dark fw-bold rounded p-2 col-md-9 mx-auto'>Make sure your pets are <span className='text-warning fw-bold'>healthy & happy</span></h2>
                </div>
                <div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol className="breadcrumb bg-success py-2 col-md-9 mx-auto">
                    {menuList.map((menuItem) => {
                      return(
                        <li className={`${menuToshow === menuItem ? "text-black " : null}} breadcrumb-item fw-bold`}>
                          <a href="!#" onClick={(event) => {this.onClickMenuHandler(event,"Veterian"); updateMenuToshow(menuItem)}}>
                            {menuItem}
                          </a>
                       </li>
                      )
                      })}
                 </ol>
                </nav>
                </div>
                  {menuToshow === "Veterian"  && <VeterianList onClickAppointmentRequestHandler={this.onClickAppointmentRequestHandler} updateSelectedVeterian={this.updateSelectedVeterian} />}
                  {menuToshow === "About Veterians" && <AboutVeterians />}
                  {menuToshow === "Info" && <PetHygien />}
                  {menuToshow === "Home" &&
                  <MenuHome updateShedularModalToShow={this.updateShedularModalToShow} updateVaccinationModalToShow={this.updateVaccinationModalToShow} />}                              
              </div>  
              <div className='carousel slide'>
                <AppointmentFormModal appointmentFormToShow={this.state.appointmentFormToShow} updateAppointmentFormToShow={this.updateAppointmentFormToShow}/>
              </div>            
               <RegisterModal updateRegisterModalToShow={this.updateRegisterModalToShow} registerModalToShow={this.state.registerModalToShow} updateLoginModalToShow={this.updateLoginModalToShow} />        
               <LoginModal updateLoginModalToShow={this.updateLoginModalToShow} loginModalToShow={this.state.loginModalToShow} updateRegisterModalToShow={this.updateRegisterModalToShow} />
               <ShedularFormModal shedularModalToShow={this.state.shedularModalToShow} updateShedularModalToShow={this.updateShedularModalToShow}/>
               <VaccinationFormModal vaccinationModalToShow={this.state.vaccinationModalToShow} updateVaccinationModalToShow={this.updateVaccinationModalToShow}/>
              <VeterianBioModal selectedVeterianBioModalToShow={this.state.selectedVeterianBioModalToShow} updateSelectedVeterianBioModalToShow={this.updateSelectedVeterianBioModalToShow} veterianInfo={this.state.selectedVeterian}/>
            </div>
          )
      } 
}

export default Home