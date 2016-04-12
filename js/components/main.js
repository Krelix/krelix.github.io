/**
 * Created by krelix on 24/03/2016.
 */

import React from 'react';

import Sidebar from './side/sidebar';
import Content from './content/content';

export default class Main extends React.Component {
  render(){
    return (
      <div className="flexRow">
        <Sidebar />
        <Content>
          {this.props.children}
        </Content>
      </div>
    );
  }
}
