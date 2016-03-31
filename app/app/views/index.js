import React from 'react';
import NavLink from '../components/NavLink'
import Home from './Home'
import {Link} from 'react-router'

export default class App extends React.Component{
  render(){
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/client">Cliente</NavLink></li>
        </ul>
        {this.props.children || <Home/>}
      </div>
    )
  }
}
