import React from 'react';
import {Route} from 'react-router';

export default(
      <Route path="/" component={Home}>
        <Route path="/info" component={Info}/>
        <Route path="/signin" component={Signin}/>
      </Route>
);
