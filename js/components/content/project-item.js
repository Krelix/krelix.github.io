/**
 * Created by krelix on 27/04/2016.
 */

import React from 'react'

class ProjectItem extends React.Component {
  render() {
    return (
      <div className="project-card">
        <h4>{this.props.name}</h4>
        <img src={this.props.imagePath} alt="Project Image"/>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

ProjectItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  imagePath: React.PropTypes.string.isRequired
}

export default ProjectItem;