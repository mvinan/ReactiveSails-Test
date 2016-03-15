import React from 'react';
import Header from './components/header.jsx'
import Body from './components/body.jsx'

var Home = React.createClass({
  render: function(){
    return(
      <html lang="es">
        <Header/>
        <Body className="body">
          <section className="sectionBody">
            <h1>Hola mundo que onda!</h1>
            <a href="/patient" className="btn btn-danger btn-lg">Pilas</a>
          </section>
        </Body>
      </html>
    )
  }
});

module.exports = Home;
