// modules/Repo.js
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>user: {this.props.params.userName}</h2>
        <h2>repo: {this.props.params.repoName}</h2>
      </div>
    )
  }
})
