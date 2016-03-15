import React from 'react';

export default class Header extends React.Component{
  render(){
    return(
      <head>
        <meta charSet="UTF-8"/>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="/styles/bootstrap.min.css"/>
        <link rel="stylesheet" href="/styles/importer.css"/>
      </head>
    )
  }
}
