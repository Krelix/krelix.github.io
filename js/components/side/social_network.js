/**
 * Created by @krelix on 25/03/2016.
 */
import React from 'react';

export default class SocialNetwork extends React.Component {
  render() {
    console.log("Path to image file : " + TwitterImage);
    return (
      <div id="socnet">
        <a href="https://twitter.com/Krelix">
          <img src="assets/images/TwitterLogo_white.png" />
          <span>@Krelix</span>
        </a>
      </div>
    );
  }
}
