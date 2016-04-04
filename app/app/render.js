import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, browserHistory, history, hashHistory } from 'react-router';
import $ from 'jquery'
// import routes and pass them into <Router/>
import routes from './views/routes'


if($('#app').length > 0){ renderAppView() } //root
function renderAppView(){
  return (
    render(
      <Router routes={routes} history={hashHistory}/>,
      document.getElementById('app')
    )
  )
}
