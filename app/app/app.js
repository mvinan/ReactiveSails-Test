import React from 'react';
import ReactDOM from 'react-dom';
import App from './views';
import NewClientView from './views/client/newClient';
import $ from 'jquery';

// /*
//  * Routes
//  */
// if($('#app').length > 0){ renderIndexView() } //root
// if($('#newClient').length > 0){ renderNewClientView() } // client/new
//
//
// //Index
// function renderIndexView(){
//   return (
//     ReactDOM.render(
//       <Router routes={routes} history={browserHistory}/>,
//       document.getElementById('app')
//     )
//   )
// }
//
// //client/new
// function renderNewClientView(){
//   return (
//     ReactDOM.render(
//       <NewClientView/>,
//       document.getElementById('newClient')
//     )
//   )
// }

import { render } from 'react-dom'
import { Router, browserHistory, history, hashHistory } from 'react-router'
// import routes and pass them into <Router/>
import routes from './views/routes'

// render(
//   <Router routes={routes} history={browserHistory}/>,
//   document.getElementById('app')
// )

if($('#app').length > 0){ renderIndexView() } //root
function renderIndexView(){
  return (
    render(
      <Router routes={routes} history={hashHistory}/>,
      document.getElementById('app')
    )
  )
}
