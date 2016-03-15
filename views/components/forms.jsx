import React from 'react';

export default class Form extends React.Component{
  render(){
    return(
      <form action={this.props.action} method={this.props.method} role="form">
        {this.props.children}
      </form>
    )
  }
}

export class Input extends React.Component{
  render(){
    return(
      <div className="form-group">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input type={this.props.type} name={this.props.name} className="form-control"/>
      </div>
    )
  }
}
