import React from 'react';
import ReactDOM from 'react-dom'
import Layout from './layouts'

export default class Home extends React.Component{
  render(){
    return(
      <Layout title={this.props.title}>
      {/*<h1>{this.props.title}</h1>*/}
      <h2>Steticorp</h2>
      </Layout>
    )
  }
}
