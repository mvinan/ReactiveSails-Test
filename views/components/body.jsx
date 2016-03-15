import React from 'react';
import Scripts from './scripts.jsx'

var Body = React.createClass({
  render: function(){
    return(
      <body>
        {this.props.children}
        <Scripts/>
      </body>
    )
  }
});

module.exports = Body;
