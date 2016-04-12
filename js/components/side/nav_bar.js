/**
 * Created by @krelix on 25/03/2016.
 */
import React from 'react';

import NavItem from './nav_item';

let navs = [
  {
    id: '1',
    title: 'About',
    to : '/',
    isIndex: true
  }, {
    id: '2',
    title: 'Contact',
    to : 'contact',
    isIndex: false
  }, {
    id: '3',
    title: 'Projects',
    to : 'projects',
    isIndex: false
  }
];

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'navs' : navs };
  }

  render() {
    return (
      <div id="navbar">
        {
          this.state.navs.map((navObj) => {
            return (<NavItem key={navObj.id} title={navObj.title} to={navObj.to} isIndex={navObj.isIndex} />);
          })
        }
      </div>
    );
  }
}
