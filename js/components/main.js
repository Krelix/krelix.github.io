/**
 * Created by krelix on 24/03/2016.
 */

import React from 'react';

import Sidebar from './side/sidebar';

export default class Main extends React.Component {
  render(){
    return (
      <div style={{display: 'flex', flexFlow: 'row'}}>
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}
