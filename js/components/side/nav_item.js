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
        <IndexLink style={{backgroundColor: '#8FDEF2', color:'white', textDecoration: 'none', paddingLeft:'1.5em'}}
              to={this.props.to} activeClassName="active">
          <span>{this.props.title}</span>
        </IndexLink>
      );
    } else if (this.props.title) {
      return (
        <Link style={{backgroundColor: '#8FDEF2', color:'white', textDecoration: 'none', paddingLeft:'1.5em',
              transformOrigin: '0 center', perspectiveOrigin: '0 center'}}
              to={this.props.to} activeClassName="active">
          <span style={{}}>{this.props.title}</span>
        </Link>
      );
    } else {
      return null;
    }
  }
}
