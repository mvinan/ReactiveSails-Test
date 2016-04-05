import React, {Component} from 'react'
import Modal from '../../components/Modal'
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
  constructor(props){
    super(props)
    this.state= {isModalOpen: false, data: []}
  }
  openModal(){
    this.setState({isModalOpen: true})
  }
  closeModal(){
    var $form = $('#form')

    function clearInputs(form){
      form.each(function(){
        this.reset();
      })
    }
    this.setState({isModalOpen: false})
    window.$('#formNewPatient').modal('hide');
    clearInputs($form)
    this.setState({data: ''})
  }

  changeDataState(){
      var $inputs = $('#form').find('input')

      var inputsName = {}
      $.each($inputs,(index, value)=>{
        var attrName = $(value).attr('name');
        var inputValue = $(value).val();
        inputsName[attrName] = inputValue
      })

      this.setState({data: inputsName})
  }

  pullData(e){
    e.preventDefault();

    var url = this.props.url


    var data = this.state.data

    $.post(url, data)
    .success((res)=>{
      this.openModal()
    })
    .error(function(XMLHttpRequest, textStatus, errorThrown){
      console.log('no se pudo hacer el envío');
    })
  }

  render(){
    return(
      <form className="ten wide column" onSubmit={this.pullData.bind(this)} onChange={this.changeDataState.bind(this)} id="form">
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
          <button type="submit" className="ui button olive">Crear nuevo paciente</button>
          {
            this.state.isModalOpen ?
              <Modal
              isOpen={this.state.isModalOpen}
              closeModalClick={this.closeModal.bind(this)}
              dataState={this.state.data}
              /> : null
          }
        </div>
      </form>
    )
  }
}
