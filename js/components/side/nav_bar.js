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

  /*handleNavClick(e){
    let reactId = e.target.getAttribute('data-reactid'),
      newState = [],
      idTarget = reactId.substring( reactId.lastIndexOf('$')+1, reactId.length);
    // TODO: Dirty. Use router and "current" navigation
    this.state.navs.map( (navObj) => {
      if(navObj.id == idTarget) {
        newState.push(Object.assign({}, navObj, {selected: true}));
      } else {
        newState.push(Object.assign({}, navObj, {selected: false}));
      }
    });
    this.setState({ 'navs' : newState});
  }*/

  render() {
    return (
      <div
        style={{marginTop: '20px',display: 'flex', flexFlow: 'column', alignContent: 'stretch', fontSize: '1.2em', lineHeight:'3em'}}>
        {
          this.state.navs.map((navObj) => {
            return (<NavItem key={navObj.id} title={navObj.title} to={navObj.to} isIndex={navObj.isIndex} />);
          })
        }
      </div>
    );
  }
}
