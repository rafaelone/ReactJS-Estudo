import React, { Component } from 'react';
import Base from './base/Base';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={(props) => <Base {...props} page="Login"/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
