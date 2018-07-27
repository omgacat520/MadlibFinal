import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';
//imported references to the input, header, and card js files are nested inside the JS code for home.js, so they're only referenced for that specific html document.

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
    <Home />
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
