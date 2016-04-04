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
        <ol>
          {
            this.state.patients.map( patient => {
              return <Patient key={patient.id} data={patient}/>
            })
          }
        </ol>
    )
  }
}

class Patient extends Component{
  render(){
    return <li>{this.props.data.name} {this.props.data.lastName} | {this.props.data.email}</li>
  }
}
