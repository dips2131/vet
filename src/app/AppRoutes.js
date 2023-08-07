import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';


// const Widgets = lazy(() => import('./widgets/Widgets'));


const Breadcrumbs = lazy(() => import('./basic-ui/Breadcrumbs'));

const Login = lazy(() => import('./user-pages/Login'));
const Login2 = lazy(() => import('./petCare-pages/Login2'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Register2 = lazy(() => import('./petCare-pages/Register2'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));

const Calendar = lazy(() => import('./apps/Calendar'));
const Home = lazy(() => import('./petCare-pages/Home'));
const PetHistory = lazy(() => import('./petCare-pages/PetHistory'));
class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/pet-history" component={ PetHistory} />
          {/* <Route exact path="/widgets" component={ Widgets } /> */}
          <Route path="/apps/calendar" component={ Calendar } />
          <Route path="/basic-ui/breadcrumbs" component={ Breadcrumbs } />     

          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/login-2" component={ Login2 } />
          <Route path="/register-1" component={ Register1 } />
          <Route path="/register-2" component={ Register2 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />
          
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;