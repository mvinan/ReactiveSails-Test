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
          <div className="ui basic grid centered modal" id="formNewPatient">

            <div className="description">
              <h3>{this.props.dataState.name} {this.props.dataState.lastName} se ha creado con exito!</h3>
            </div>

            <div className="actions middle aligned row">
              <button className="ui labeled olive icon button" onClick={this.props.closeModalClick}> <i className="checkmark icon"></i> OK</button>
            </div>

          </div>)
        }else{
          return null
        }
  }
}
