/**
 * Created by @krelix on 25/03/2016.
 */
import React from 'react';

export default class SocialNetwork extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'rgb(238, 37, 96)', width: '18vw', alignSelf: 'center', marginTop:'auto'}}>
        <a href="https://twitter.com/Krelix" style={{border: 'none', fontDecoration:'none', fontWeight:'bold', fontSize:'1.25em', color:'white', marginTop:'1.2em', verticalAlign: 'super', paddingLeft: '1.75em'}}>
          <img src="assets/images/TwitterLogo_white.png" style={{height:'1.5em', verticalAlign: 'bottom'}} />@Krelix</a>
      </div>
    );
  }
}
