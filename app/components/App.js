import React from 'react';
import Devtools from './Devtools/Devtools';
import styles from './style.css';

export default class App extends React.Component{

  constructor (props) {
    super(props);
  }

  render () {
    return (
        <div>
          {this.props.children}

        </div>
    );
  }
}
          // <Devtools />
