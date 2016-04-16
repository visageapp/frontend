import React from 'react';
import { render } from 'react-dom';
import FacebookLogin from '../FacebookLogin.js';

class CreditCard extends React.Component{

  constructor (props) {
    super(props);
  }

  responseFacebook(response) {
      if (response.accessToken) {
          console.log(response);
          this.props.login(response.name);
          console.log(response.accessToken);
          localStorage.setItem('token', response.accessToken);
      }
  }

  render () {
    var cardPath = "M296.667,202.909H91.333c0,0-31.043,47.993-28,36.833c3-11-12-36.833-12-36.833H24.667c-6.6,0-12-5.4-12-12v-162c0-6.6,5.4-12,12-12h272c6.6,0,12,5.4,12,12v162C308.667,197.509,303.267,202.909,296.667,202.909z";
    var clipStyle = {
      clipPath: 'url(#clip)',
      fill: 'url(#grad2)'
    };

    var gradients = (
      <g>
        <linearGradient id="grad1" gradientUnits="userSpaceOnUse" x1="300" y1="328" x2="300" y2="88.5162">
        <stop  offset="0" style={{stopColor:'#C0C2C3'}}/>
        <stop  offset="1" style={{stopColor:'#959D9E'}}/>
        </linearGradient>
        <linearGradient id="grad2" gradientUnits="userSpaceOnUse" x1="153" y1="203.7419" x2="449" y2="203.7419">
        <stop  offset="0" style={{stopColor:'#E1E3E3'}}/>
        <stop  offset="1" style={{stopColor:'#CBD4D4'}}/>
        </linearGradient>
      </g>
    );

    return (
          <svg viewBox="0 0 320 240" style={{width: '25%', fontFamily: '"ocr-a-std",sans-serif'}}>
          {gradients}
          <clipPath id="clip">
            <path d={cardPath}/>
          </clipPath>
          <path style={{filter: 'drop-shadow( 0 0 8px rgba(0,0,0,0.2))'}} d={cardPath}/>

          <path style={clipStyle} d={cardPath}/>
          <foreignObject class="node" x="46" y="22" width="200" height="300">
            <input placeholder="Credit Card Number"/>
            <input placeholder="date"/>
            <input placeholder="CSV" />
            <FacebookLogin socialId="1674177709516637" language="en_US" scope="public_profile,email" class="facebook-login" responseHandler={this.responseFacebook.bind(this)} xfbml={true} version="v2.5" buttonText="Login With Facebook"/>
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
