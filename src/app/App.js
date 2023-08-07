import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import './App.css';
// import Sidebar from './shared/Sidebar';
// import SettingsPanel from './shared/SettingsPanel';
import Footer from './shared/Footer';
import { useHistory } from 'react-router-dom';
import PetCareNav from './shared/PetCareNav';
import { Provider, createContext } from 'react';
import { ParentContext } from './contexts/context';
class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    menubarToshow: "Home"
  }
  this.updateMenuToShow  = this.updateMenuToShow.bind(this);
  }
  componentDidMount() {
    this.onRouteChanged();
  }
  updateMenuToShow(value) {
    this.setState({menubarToshow: value});
    console.log(value,"function called");
  } 
  render () {
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar updateMenuToShow = {this.updateMenuToShow}/> : '';
    // const ParentContext = createContext();
    // let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar/> : '';
    // let SettingsPanelComponent = !this.state.isFullPageLayout ? <SettingsPanel/> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
    const { pathname } = this.props.location;
  const provided = {
    menuToshow: this.state.menubarToshow,
    updateMenuToshow: value => this.updateMenuToShow(value)
  }
    return (
      <ParentContext.Provider value={provided}>
         <div className={`container-scroller pt-0 ${!this.state.isFullPageLayout && pathname === "/" ? "background-container" : null }`}>
         {navbarComponent}
        <div className="container-fluid page-body-wrapper" >
          {/* { sidebarComponent } */}
          {/* <div className="main-panel container me-0"> */}
            <div className="container p-0" >
              <AppRoutes/>
              {/* { SettingsPanelComponent } */}
            </div>
          {/* </div> */}
        </div>
            { footerComponent }
      </div>
      </ParentContext.Provider>      
      );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/user-pages/login-1', '/login-2', 'register-1', '/register-2', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        this.setState({
          isFullPageLayout: false
        })
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }

}

export default withRouter(App);
