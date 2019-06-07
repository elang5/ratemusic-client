import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'

library.add(
  farStar,
  fasStar
)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));

