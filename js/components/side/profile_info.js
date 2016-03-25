/**
 * Created by krelix on 24/03/2016.
 */

import React from 'react';

export default class ProfileInfo extends React.Component {
  render() {
    // https://avatars1.githubusercontent.com/u/506193?v=3&s=460
    // Adrien BRIZARD
    return (
      <div style={{marginTop: '20px', display: 'flex', alignItems:'center', flexFlow:'column nowrap'}}>
        <img src='assets/images/tay_ai.bmp'
             style={{width:'10vw', borderRadius: '50% 10% 100% 0px'}}/>
        <div style={{display:'flex', flexFlow: 'column nowrap', alignItems: 'center'}}>
          <p style={{
            textAlign: 'center',
            backgroundColor: '#EE2560',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.1em',
            padding: '10px 5px',
            marginBottom: '0px'
          }}>HELLO DIS IZ TAY</p>
          <p style={{
            textAlign: 'center',
            backgroundColor: '#EE2560',
            color: 'white',
            padding: '5px',
            marginTop: '5px'
          }}>A.K.A Krelix</p>
        </div>
      </div>
    );
  }
}
