import React from 'react';
import $ from 'jquery';

export default class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = { data: [] }

  }

  changeState(){
      var $inputs = $('#form').find('input')

      var inputsName = {}
      $.each($inputs,(index, value)=>{
        var attrName = $(value).attr('name');
        var inputValue = $(value).val();
        inputsName[attrName] = inputValue
      })

      this.setState({data: inputsName})
  }

  onSubmit(e){
    e.preventDefault();

    function clearInputs(form){
      form.each(function(){
        this.reset();
      })
    }

    var url = this.props.url
    var $form = $('#form')


    var data = this.state.data

    $.post(url, data)
    .success(function(res){
      clearInputs($form)
      window.$('#formNewPatient').modal('show');
    })
    .error(function(XMLHttpRequest, textStatus, errorThrown){
    })
    this.setState({data: []})
  }

  render(){
    return(
      <form
      {...this.props}
      onSubmit={this.onSubmit.bind(this)}
      id="form"
      onChange={this.changeState.bind(this)}
      >
        {this.props.children}
      </form>
    )
  }
}
