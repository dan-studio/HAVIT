import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import ReactGA from 'react-ga'

const MEASUREMENT_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID

ReactGA.initialize(MEASUREMENT_ID)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
 