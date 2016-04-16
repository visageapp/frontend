import React from 'react';
import { render } from 'react-dom';
import Landing from './Landing/Landing.js';
import { Provider } from 'react-redux';
import configureStore from './../store/store.js';
import Devtools from './Devtools/Devtools.js';

var store = configureStore();

class App extends React.Component{

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Provider store={store}>
        <div>
          <Landing />
          <Devtools />
        </div>
      </Provider>
    );
  }
}

render(
<App />,document.getElementById('app')
);
