import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from './../../actions/landing.js';
import FacebookLogin from './FacebookLogin.js';
import PlaidLogin from './PlaidLogin.js';
import {Motion, StaggeredMotion, spring} from 'react-motion';
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
  responsePlaid(public_token, metadata) {
    console.log(public_token);
    console.log(metadata);
  }
  render () {
    var cardPath = 'M296.667,202.909H91.333c0,0-31.043,47.993-28,36.833c3-11-12-36.833-12-36.833H24.667c-6.6,0-12-5.4-12-12v-162c0-6.6,5.4-12,12-12h272c6.6,0,12,5.4,12,12v162C308.667,197.509,303.267,202.909,296.667,202.909z';
    var clipStyle = {
      clipPath: 'url(#clip)',
      fill: 'url(#grad1)'
    };
    var header = {
      color: '#888',
      paddingTop: '10px',
      marginBottom: '0px',
      paddingBottom:'0px',
      textAlign: 'right',
      paddingRight: 25
    };
    var cardInfo = {
      textShadow: '0 1px 1px rgba(0,0,0,0.5)',
      fontSize: 17,
      textTransform: 'uppercase',
      marginTop: '10px',
      marginBottom: '10px',
      paddingLeft: '40px'
    };
    var cardInfoDate = {
      textShadow: '0 1px 1px rgba(0,0,0,0.5)',
      fontSize: 17,
      textTransform: 'uppercase',
      justifyContent: 'center',
      marginTop: '10px',
      marginBottom: '10px',
      paddingLeft: '40px'
    };
    var facebookBtn =  {
      border: 'none',
      boxShadow: 'none',
      backgroundColor: '#415D89',
      width: '100%',
      height: '39px',
      padding: '5px',
      borderRadius: '2px',
      textShadow: '0 1px 1px rgba(0,0,0,0.5)',
      color: '#fff',
      border: '1px solid #415D89',
      fontFamily: '"ocr-a-std",sans-serif'
    };
    var gradients = (
      <g>
        <linearGradient id="grad1" gradientUnits="userSpaceOnUse" x1="300" y1="328" x2="300" y2="88.5162">
        <stop  offset="0" style={{stopColor:'#C0C2C3'}}/>
        <stop  offset="1" style={{stopColor:'#959D9E'}}/>
        </linearGradient>
        <linearGradient id="grad2" gradientUnits="userSpaceOnUse" x1="153" y1="203.7419" x2="449" y2="203.7419">
        <stop  offset="0" style={{stopColor:'#f5f5f5'}}/>
        <stop  offset="1" style={{stopColor:'#f3f3f3'}}/>
        </linearGradient>
      </g>
    );
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <svg viewBox="0 0 320 256" style={{width: '480px', fontFamily: '"ocr-a-std",sans-serif'}}>
          {gradients}
          <clipPath id="clip">
            <path d={cardPath}/>
          </clipPath>
          <Motion defaultStyle={{x: 90}} style={{x: spring(0, {stiffness: 60})}}>
            {i => {
                return (
                  <g style={{transform: `translateY(${i.x}px)`}}>
                    <g style={{transform: `rotateX(${i.x}deg)`}}>
                      <path style={{filter: 'drop-shadow( 0 0 8px rgba(0,0,0,0.1))'}} d={cardPath}/>
                      <path style={clipStyle} d={cardPath}/>
                      <path style={{fill: 'url(#grad2)', clipPath: 'url(#clip)'}} d="M296.333,197.226H91c0,0-31.043,47.993-28,36.833c3-11-12-36.833-12-36.833H24.333c-6.6,0-12-5.4-12-12v-162c0-6.6,5.4-12,12-12h272c6.6,0,12,5.4,12,12v162C308.333,191.826,302.933,197.226,296.333,197.226z"/>
                      <foreignObject style={{clipPath: 'url(#clip)'}} class="node" x="0" y="18" width="320" height="300">
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                          <img style={{width: '70px', height: 'auto', alignSelf: 'flex-end', paddingRight: '-10px',display: 'inline-block'}} alt="Visage" src="assets/brand/logo.svg"/>
                          <img style={{width: '128px', height: 'auto', alignSelf: 'flex-end', marginLeft: '-10px',paddingRight: '20px', display: 'inline-block'}} alt="Visage" src="assets/brand/logotype.svg"/>
                        </div>
                        <input style={Object.assign({display: 'block', width: '100%'}, cardInfoDate)} placeholder="XXXX XXXX XXXX XXXX" />
                        <p style={cardInfo}>04/16</p>
                        <p style={cardInfo}>{(this.props.landing.get('name')) ?  this.props.landing.get('name') : 'Your Name' }</p>
                      </foreignObject>
                    </g>
                    <path style={{display: (i.x > 30) ? 'none' : 'auto', transform: `rotateX(${i.x-90}deg)`}} d="M300,18H20c-4.4,0-8-3.6-8-8v0c0-4.4,3.6-8,8-8h280c4.4,0,8,3.6,8,8v0C308,14.4,304.4,18,300,18z"/>
                  </g>
                );
              }
            }
          </Motion>
        </svg>
        <FacebookLogin socialId="1674177709516637" pageId='1602244990089596' language="en_US" btnStyles={facebookBtn} responseHandler={this.responseFacebook.bind(this)} xfbml={true} version="v2.6" buttonText="Login With Facebook"/>
        <PlaidLogin  />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    landing: state.landing
  }
}
function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreditCard);
