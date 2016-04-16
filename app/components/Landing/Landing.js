import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from './../../actions/landing.js';
import FacebookLogin from './FacebookLogin.js';
import CreditCard from './CreditCard';

class Landing extends React.Component {

    constructor(props) {
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

    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
              <CreditCard/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {info: state.landing}
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(login, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
