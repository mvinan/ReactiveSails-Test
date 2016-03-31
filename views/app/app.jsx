import React from 'react';
import ReactDOM from 'react-dom'
import Layout from '../layouts'

export default class App extends React.Component{
  render(){
    return(
      <Layout title={this.props.title}>
      {/*<h1>{this.props.title}</h1>*/}
      <h2>App</h2>
      <div id="app"></div>
      </Layout>
    )
  }
}
