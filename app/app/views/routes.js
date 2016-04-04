import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from './Layout'
import Pacient from './Patient'
import NewPacient from './Patient/NewPacient'
import Home from './Home'

// module.exports = (
//   <Route path="/" component={App}>
//     <IndexRoute component={Home}/>
//     <Route path="/repos" component={Repos}>
//       <Route path="/repos/:userName/:repoName" component={Repo}/>
//     </Route>
//     <Route path="/about" component={About}/>
//   </Route>
// )

module.exports = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="/pacientes" component={Pacient}/>
    <Route path="/pacientes/new" component={NewPacient}/>
  </Route>
)
