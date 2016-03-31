import React from 'react'
import Form ,{Input} from '../../components/form'

export default class NewClientView extends React.Component{
  render(){
    return(
      <Form>
        <Input type="text" name="name" placeholder="Nombre del paciente…"/>
      </Form>
    )
  }
}
