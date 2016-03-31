import React from 'react';
import Layout from '../layouts/layout'

export default class Home extends React.Component{
  render(){
    return(
      <Layout title={this.props.title}>
        <h1> App: {this.props.title} </h1>
        <section id="newClient"></section>
      </Layout>
    )
  }
}
