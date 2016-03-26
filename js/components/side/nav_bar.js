/**
 * Created by @krelix on 25/03/2016.
 */
import React from 'react';

import NavItem from './nav_item';

let navs = [
  {
    id: '1',
    title: 'About',
    selected: true
  }, {
    id: '2',
    title: 'Contact',
    selected: false
  }, {
    id: '3',
    title: 'Projects',
    selected: false
  }
];

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'navs' : navs };
    // Binding this cause call from event means non-this context
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(e){
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
  }

  render() {
    return (
      <div
        style={{display: 'flex', flexFlow: 'column', alignContent: 'stretch', fontSize: '1.2em', fontWeight:'bold',color:'white', lineHeight:'3em'}}>
        {
          this.state.navs.map((navObj) => {
            return (<NavItem key={navObj.id} title={navObj.title}
                             selected={navObj.selected} onClick={this.handleNavClick} />);
          })
        }
      </div>
    );
  }
}