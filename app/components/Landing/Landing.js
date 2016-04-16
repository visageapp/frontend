import React from 'react';
import {render} from 'react-dom';
import CreditCard from './CreditCard';

export default class Landing extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
              <CreditCard/>
            </div>
        );
    }
}
