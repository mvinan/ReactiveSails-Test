import React from 'react';
import ReactDOM from 'react-dom'

export default class Layout extends React.Component{
  developmentScript(){
    if (sails.config.environment == "development") {
      return <script type="text/javascript" src={sails.config.models.livereloadPath} />
    }
  }
  render(){
    return(
      <html lang="es">
        <head>
          <meta charSet="UTF-8"/>
          <title>{this.props.title}</title>
          {/*STYLES*/}
          <link rel="stylesheet" href="/styles/semantic.min.css" />
          <link rel="stylesheet" href="/styles/styles.css" />
          {/*STYLES END*/}
        </head>
        <body className={this.props.bodyClass}>

          {this.props.children}

          {this.developmentScript}
          {/*SCRIPTS*/}
          <script type="text/javascript" src="/js/dependencies/sails.io.js"></script>
          <script type="text/javascript" src="/js/dependencies/jquery.min.js"></script>
          <script type="text/javascript" src="/js/mediumDependencies/semantic.min.js"></script>
          <script type="text/javascript" src="/js/bundle.js"></script>
          {/*SCRIPTS END*/}
        </body>
      </html>
    )
  }
}
