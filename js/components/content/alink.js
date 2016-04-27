/**
 * Created by krelix on 27/04/2016.
 */

import React from 'react'

export default class ALink extends React.Component {
  render() {
    return (
      <a href={this.props.src} target="_blank" rel="noreferrer">{this.props.children}</a>
    )
  }
}