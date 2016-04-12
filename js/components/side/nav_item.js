/**
 * Created by @krelix on 25/03/2016.
 */
import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class NavItem extends React.Component {
  render() {
    // Dirty...ish ? Fix it using the router ?
    if (this.props.isIndex === true) {
      return (
        <IndexLink to={this.props.to} activeClassName="active">
          <span>{this.props.title}</span>
        </IndexLink>
      );
    } else if (this.props.title) {
      return (
        <Link to={this.props.to} activeClassName="active">
          <span>{this.props.title}</span>
        </Link>
      );
    } else {
      return null;
    }
  }
}
