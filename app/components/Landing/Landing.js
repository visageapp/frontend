import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from './../../actions/landing.js';
import FacebookLogin from './FacebookLogin.js';

class Landing extends React.Component{

  constructor (props) {
    super(props);
  }

  responseFacebook (response) {
    if (response.accessToken) {
      console.log(response);
      this.props.login(response.name);
      console.log(response.accessToken);
      localStorage.setItem('token', response.accessToken);
    }
  }

  render () {
    return (
      <div>
        <h1>Landing</h1>
          <FacebookLogin socialId="1674177709516637"
                         language="en_US"
                         scope="public_profile,email"
                         class="facebook-login"
                         responseHandler={this.responseFacebook.bind(this)}
                         xfbml={true}
                         version="v2.5"
                         buttonText="Login With Facebook"/>
      </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
