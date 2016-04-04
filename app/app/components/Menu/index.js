import React, {Component} from 'react'
import {Link} from 'react-router'


export default class Menu extends Component{
  render() {
    return (
      <ul {...this.props}>
        {this.props.children}
      </ul>
    )
  }
}

export class ItemList extends Component{
  render(){
    return(
      <li className="Menu-list">
        <NavLink className="Menu-item" {...this.props}>
          {this.props.children}
        </NavLink>
      </li>
    )
  }
}

export class NavLink extends Component{
  render(){
    return(
      <Link {...this.props} activeClassName="active"/>
    )
  }
}
