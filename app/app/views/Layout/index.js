import React,{Component} from 'react';
import Menu, {ItemList} from '../../components/Menu';
import Home from '../Home'
import {Link} from 'react-router'

export default class Layout extends Component{
  render(){
    return (
      <div className="App">
        <Menu className="menu Menu align-right" role="nav">
          <ItemList to="/" onlyActiveOnIndex>Home</ItemList>
          <ItemList to="/pacientes">Pacientes</ItemList>
          <ItemList to="/pacientes/new">Nuevo Paciente</ItemList>
        </Menu>
        {this.props.children || <Home/>}
      </div>
    )
  }
}
