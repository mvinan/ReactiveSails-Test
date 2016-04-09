import React, {Component} from 'react';
import $ from 'jquery';
import PatientsList from '../../components/PatientList'

export default class PatientView extends Component{
  constructor(props){
    super(props)
    this.state = {patients: []}
  }
  componentWillMount(){
    var source = 'http://localhost:1337/patient'
    this.serverRequest = $.get(source, (result)=> {
      this.setState({
        patients: result
      })
    })
  }

  render() {
    return(
      <div>
        <h1>Pacientes</h1>
        <PatientsList data={this.state.patients} />
      </div>
    )
  }
}
