import React, {Component} from 'react'

export default class PatientsList extends Component{
  render(){
    return(
        <table className="ui yellow table very basic">
          <PatientHeading/>
          <tbody>
            {
              this.props.data.map( patient => {
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
          <td><h3>{this.props.data.name}</h3></td>
          <td>{this.props.data.lastName}</td>
          <td>{this.props.data.email}</td>
      </tr>
    )
  }
}

class PatientHeading extends Component{
  render(){
    return (
      <thead>
        <tr>
          <th>NOMBRES</th>
          <th>APELLIDOS</th>
          <th>E-MAIL</th>
        </tr>
      </thead>
    )
  }
}
