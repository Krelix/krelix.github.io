/**
 * Created by krelix on 24/03/2016.
 */

import React from 'react';

export default class ProfileInfo extends React.Component {
  render() {
    // CSS transforms... transform container, span content with display block and inverse transform
    // Also : -webkit-clip-path : polygon(14% 0, 85% 0, 78% 100%, 0% 100%); check http://bennettfeely.com/clippy/
    return (
      <div id="profileInfo" className="flexRow">
        <img src='https://avatars1.githubusercontent.com/u/506193?v=3&s=460' />
        <div>
          <div id="surname" className="nameContainer">
            <span>A.K.A Krelix</span>
          </div>
          <div id="realname" className="nameContainer">
            <span>Adrien BRIZARD</span>
          </div>
        </div>
      </div>
    );
  }
}
