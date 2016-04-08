import React, {Component} from 'react';
import $ from 'jquery';

export default class PatientView extends Component{
  render() {
    return(
      <div>
        <h1>Pacientes</h1>
        <PatientsList source="http://localhost:1337/patient" />
      </div>
    )
  }
}

export class PatientsList extends Component{
  constructor(props){
    super(props)
    this.state = {patients: []}
  }
  componentDidMount(){
    this.serverRequest = $.get(this.props.source, (result)=> {
      this.setState({
        patients: result
      })
    })
  }

  componentWillUnmount(){
    this.serverRequest.abort();
  }

  render(){
    return(
        <table className="ui yellow table">
          <PatienHeading/>
          <tbody>
            {
              this.state.patients.map( patient => {
                return <Patient key={patient.id} data={patient}/>
              })
            }
          </tbody>

        </table>
    )
  }
}


class Patient extends Component{
  render(){
    return (
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.lastName}</td>
        <td>{this.props.data.email}</td>
      </tr>
    )
  }
}

class PatienHeading extends Component{
  render(){
    return (
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>E-mail</th>
        </tr>
      </thead>
    )
  }
}
