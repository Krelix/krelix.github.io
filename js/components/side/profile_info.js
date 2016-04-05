/**
 * Created by krelix on 24/03/2016.
 */

import React from 'react';

export default class ProfileInfo extends React.Component {
  render() {
    // https://avatars1.githubusercontent.com/u/506193?v=3&s=460
    // Adrien BRIZARD
    // CSS transforms... transform container, span content with display block and inverse transform
    // Also : -webkit-clip-path : polygon(14% 0, 85% 0, 78% 100%, 0% 100%); check http://bennettfeely.com/clippy/
    return (
      <div style={{marginTop: '20px', display: 'flex', alignItems:'center', flexFlow:'column nowrap'}}>
        <img src='https://avatars1.githubusercontent.com/u/506193?v=3&s=460'
             style={{width:'10vw'}}/>
        <div style={{display:'flex', flexFlow: 'column nowrap', alignItems: 'center'}}>
          <div style={{
            textAlign: 'center',
            backgroundColor: '#EE2560',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.1em',
            padding: '10px 5px',
            marginBottom: '0px',
            transform: 'skewX(-20deg) rotate(-5deg)'
          }}><span style={{display: 'block', transform: 'skewX(20deg) rotate(5deg)'}}>Adrien BRIZARD</span></div>
          <div style={{
            textAlign: 'center',
            backgroundColor: '#EE2560',
            color: 'white',
            padding: '5px',
            marginTop: '5px',
            transform: 'skewX(30deg) rotate(5deg) scale(1.1) translateY(-2px)'
          }}><span style={{ display:'block', transform: 'skewX(-30deg) rotate(-5deg) scale(0.9)' }}>A.K.A Krelix</span></div>
        </div>
      </div>
    );
  }
}
