import React, {Component} from 'react'
import Form, {InputContainer} from '../../components/Form'
// import Modal from '../../components/Modal'
import $ from 'jquery'


export default class NewPacient extends Component{
  render() {
    return <div className="ui centered grid">
      <div className="row">
        <h1>Nuevos Pacientes</h1>
      </div>
      <div className="row">
        <FormNewPatient url="/patient/create"/>
      </div>
    </div>
  }
}


export class FormNewPatient extends Component{
  handleClick(){
    window.$('.ui.basic.modal').modal('show');
  }
  render(){
    return(
      <Form url={this.props.url} className="ten wide column">
        <div className="ui form" id="picture">
          <h4 className="ui dividing header">Información personal del paciente</h4>

          <div className="two fields">
            <div className="field">
              <label>Nombre</label>
              <input type="text" placeholder="Primer nombre" name="name"/>
            </div>
            <div className="field">
              <label>Apellido</label>
              <input type="text" placeholder="Apellido" name="lastName"/>
            </div>
          </div>
          <div className="field">
            <label>E-mail</label>
            <input type="email" placeholder="paciente@steticorp.com" name="email"/>
          </div>
          <a onClick={this.handleClick.bind(this)} className="ui button olive">Crear nuevo paciente</a>
          <Modal/>
        </div>
      </Form>
    )
  }
}


class ButtonModal extends Component{
  constructor(props){
    super(props)
    this.state = { showModal : false}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({showModal: true})
  }

  render(){
    return(<div>
          <button onClick={this.handleClick} className={`ui button ${this.props.color || "olive"}`}>Crea un nuevo cliente</button>
          {
            this.state.showModal ?
            <Modal /> :
            null

          }
    </div>
  )
}
}


class Modal extends Component{
  constructor(props){
    super(props)
    this.state = { render: true}
  }

  componentDidMount(){
    window.$('.ui.modal').modal({detachable: false});
  }
  render(){
    return(
      <div className="ui basic modal">
        <i className="close icon"></i>
        <div className="header">
          Archive Old Messages
        </div>
        <div className="image content">
          <div className="image">
            <i className="archive icon"></i>
          </div>
          <div className="description">
            <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
          </div>
        </div>
        <div className="actions">
          <div className="two fluid ui inverted buttons">
            <div className="ui red basic inverted button close">
              <i className="remove icon"></i>
              No
            </div>
            {/*<button type="submit" className="ui green basic inverted button">
              <i className="checkmark icon"></i>
              Yes
            </button>*/}
          </div>
        </div>
      </div>
    )
  }
}
