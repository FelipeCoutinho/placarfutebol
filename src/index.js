import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Routes from './router';
import Header from './pages/Header'


ReactDOM.render(
  <BrowserRouter>
    <Header/>
    <Routes/>
  </BrowserRouter>
,
  document.getElementById('root')
)