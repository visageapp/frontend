import React from 'react';
import { render } from 'react-dom';
import FacebookLogin from './FacebookLogin.js';

class CreditCard extends React.Component{

  constructor (props) {
    super(props);
  }


  render () {
    var clip = {
      clipPath: 'url(#clip)'
    };

    return (
          <svg viewBox="0 0 588 392">
          <clipPath id="clip">
            <path d="M437,277.484H231.666c0,0-31.043,47.993-28,36.833c3-11-12-36.833-12-36.833H165c-6.6,0-12-5.4-12-12v-162c0-6.6,5.4-12,12-12h272c6.6,0,12,5.4,12,12v162C449,272.084,443.6,277.484,437,277.484z"/>
          </clipPath>
          <path style={{clip}} d="M437,277.484H231.666c0,0-31.043,47.993-28,36.833c3-11-12-36.833-12-36.833H165c-6.6,0-12-5.4-12-12v-162c0-6.6,5.4-12,12-12h272c6.6,0,12,5.4,12,12v162C449,272.084,443.6,277.484,437,277.484z"/>
          <foreignObject class="node" x="46" y="22" width="200" height="300">
            <input placeholder="Credit Card Number"/>
            <input placeholder="date"/>
            <input placeholder="CSV" />
          </foreignObject>
      </svg>
    );
  }
}

function mapStateToProps(state) {
  return {
    info: state.landing
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch),
  }
}

export default CreditCard;
