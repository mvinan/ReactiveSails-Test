import React, {Component} from 'react'
import PatientsList from '../../components/PatientList'

export default React.createClass({
  render() {
    return (
      <div className="Home ui centered grid">
        <article className="ui aligned center thirteen wide column">
          <h1>Buscar…</h1>
          <Form/>
        </article>
      </div>
    )
  }
})

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {isDisplayData: false, query: '' ,data:[]}
  }
  displayData(){
    this.setState({isDisplayData: true})
  }
  dismissData(){
    this.setState({isDisplayData: false})
  }
  pullData(e){
    e.preventDefault();
    var query = this.state.query.trim()
    var url = `/patient?where={"name":{"contains":"${query}"}}`
    var data = this.state.data

    if (query != ''){
      fetch(url)
        .then((response)=>{
          return response.json()
        })
        .then( (response) => {
          this.setState({data: response })
        })
      this.displayData()
    }else{
      this.setState({data: []})
      this.dismissData()
    }
  }
  handleChange(e){
    this.setState({query: e.target.value })
  }
  render(){
    return(
      <div>
        <form className="ui form row" onSubmit={this.pullData.bind(this)} onChange={this.handleChange.bind(this)}>
          <div className="ui fluid massive action input">
            <input type="text" placeholder="Escribe el nombre de un paciente..." name="search" />
            <button type="submit" className="ui icon button yellow">
              <i className="search icon"></i>
            </button>
          </div>
        </form>
        <div className="row">
        {
          this.state.isDisplayData ?
          <PatientsList data={this.state.data}/> : null
        }
        </div>
      </div>
    )
  }
}
