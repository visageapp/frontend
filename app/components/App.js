import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Hello from App</h1>
      </div>
    );
  }
}

render(
<App />,document.getElementById('app')
);
