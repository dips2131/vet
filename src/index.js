import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter  basename="/demo/staradmin2-react-pro/template/vertical-default-light/preview">
    <App />
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();