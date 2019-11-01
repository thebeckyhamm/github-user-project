import React from "react";
import "./App.scss";
import Users from "./components/Users/Users";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <h1 className='header__text'>Github Users</h1>
      </header>
      <div className='wrapper'>
        <Router>
          <Switch>
            <Route path='/search/users' component={Users} />
            <Route path='/user/profile' component={Profile} />
            <Route component={Users} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
