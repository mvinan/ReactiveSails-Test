import React from 'react';

export default class Scripts extends React.Component{
  render(){
    return(
      <div className="scripts">
        <script src="/js/dependencies/sails.io.js"></script>
        <script src="/js/bootstrap.min.js"></script>
      </div>
    )
  }
}
