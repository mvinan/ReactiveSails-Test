import React from 'react';
import ReactDOM from 'react-dom'
import Layout from './layouts'

export default class Home extends React.Component{
  render(){
    return(
      <Layout bodyClass="ui container" title="Steticorp">
        <div id="app"></div>
      </Layout>
    )
  }
}
