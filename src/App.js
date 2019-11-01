import React from "react";
import "./App.scss";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <h1 className='header__text'>Github Users</h1>
      </header>
      <div className='wrapper'>
        <Users />
      </div>
    </div>
  );
}

export default App;
