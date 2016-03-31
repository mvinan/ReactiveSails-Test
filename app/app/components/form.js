import React from 'react';

export default class Form extends React.Component{
  render(){
    return(
      <form>
        {this.props.children}
      </form>
    )
  }
}

export class Input extends React.Component{
  render(){
    return(
      <input {...this.props}/>
    )
  }
}
