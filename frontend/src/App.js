import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/login';
import Profile from './components/profile';
import Users from './components/users';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={Users} />
      </Router>
    );
  }
}

export default App;
