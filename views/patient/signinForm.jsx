import React from 'react';
import Header from '../components/header.jsx'
import Body from '../components/body.jsx'
import Form,{Input} from '../components/forms.jsx'

var signinView = React.createClass({
  render: function(){
    return(
      <html lang="es">
        <Header/>
        <Body className="body">
          <section className="sectionBody container">
            <h1>Formulario de contacto</h1>

            <Form action="/patient/create" method="POST">
              <Input type="text" name="name" label="Nombre"/>
              <Input type="text" name="last_name" label="Apellido"/>
              <Input type="email" name="email" label="Email (requerido)"/>
            </Form>

          </section>
        </Body>
      </html>
    )
  }
});

module.exports = signinView;
