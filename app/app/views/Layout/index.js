import React,{Component} from 'react';
import Menu, {ItemList} from '../../components/Menu';
import Home from '../Home'
import {Link} from 'react-router'

export default class Layout extends Component{
  render(){
    return (
      <div className="App">
        <Menu className="menu Menu align-right" role="nav">
          <ItemList to="/" onlyActiveOnIndex>Inicio</ItemList>
          <ItemList to="/pacientes">Pacientes</ItemList>
          <div className="right menu">
            <ItemList to="/pacientes/new"><i className="icon plus"></i>Nueva Ficha</ItemList>
          </div>
        </Menu>
        {this.props.children || <Home/>}
      </div>
    )
  }
}
