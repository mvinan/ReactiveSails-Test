// modal.jsx
import React, { Component } from 'react';
import Portal from 'react-portal';

export class InnerModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modalHeight: 0 };
  }

  componentDidMount() {
    let modalHeight = window.$('#reactInnerModal').modal('show');
    this.setState({modalHeight: modalHeight});
  }

  render() {
    return (
      <div id='reactInnerModal' className='ui standard test modal transition visible active' style={{'margin-top': - this.state.modalHeight / 2}}>
        <i className='close icon' onClick={this.props.closePortal}></i>
        {this.props.children}
      </div>
    );
  }
}

export default class Modal extends Component {
  render() {
    let triggerButton = <button className='ui button'>Open Modal</button>;
    return (
      <Portal className='ui dimmer modals visible active page transition' openByClickOn={triggerButton} closeOnEsc={true} closeOnOutsideClick={true}>
        <InnerModal>
          {this.props.children}

        </InnerModal>
      </Portal>
    );
  }
}
