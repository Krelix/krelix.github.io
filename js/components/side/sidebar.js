/**
 * Created by krelix on 24/03/2016.
 */

import React from 'react';

import ProfileInfo from './profile_info';
import NavBar from './nav_bar';
import SocialNetwork from './social_network';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <ProfileInfo />
        <NavBar />
        <SocialNetwork />
      </div>
    );
  }
}
