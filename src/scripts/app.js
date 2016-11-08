'use strict';

import '../styles/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import ReMarked from './components/marked/ReMarked.jsx';

var app = document.getElementById('app');

ReactDOM.render((
  <ReMarked />
),app)

if(module.hot){
  module.hot.accept();
}
