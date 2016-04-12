/**
 * Created by Adrien on 11/04/2016.
 */

import React from 'react';

export default class Content extends React.Component {
  render() {
    //TODO : set content to be rendered
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}