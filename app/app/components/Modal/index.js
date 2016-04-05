import React, {Component} from 'react'

export default class Modal extends Component{
  constructor(props){
    super(props)
    this.state = {isRender: this.props.isOpen}
  }

  componentDidMount(){
    window.$('#formNewPatient')
      .modal({detachable: false})
      .modal('setting', 'closable', false)
      .modal('show')
  }

  render(){
      if(this.props.isOpen){
          return(
          <div className="ui basic modal" id="formNewPatient">
            <div className="header">Genial, paciente nuevo!</div>
            <div className="image content">
              <div className="image">
                <i className="archive icon"></i>
              </div>
              <div className="description">
                <h3>{this.props.dataState.name} {this.props.dataState.lastName}</h3>
                <small>Se ha creado exitosamente!</small>
              </div>
            </div>
            <div className="actions">
              <button className="ui green basic button" onClick={this.props.closeModalClick}>Ok, gracias!</button>
            </div>
          </div>)
        }else{
          return null
        }
  }
}
