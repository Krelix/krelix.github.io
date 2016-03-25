/**
 * Created by @krelix on 25/03/2016.
 */
import React from 'react';

export default class NavItem extends React.Component {
  render() {
    // Not selected #8FDEF2
    if (this.props.title) {
      return (
        <div style={{backgroundColor: this.props.selected === true ? '#45d9fd' : '#8FDEF2', paddingLeft:'1.5em'}}
             onClick={this.props.onClick}>
          {this.props.title}
        </div>
      );
    } else {
      return null;
    }
  }
}
