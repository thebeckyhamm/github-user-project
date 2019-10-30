import React from "react";
import "./App.css";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className='app'>
      <header>
        <h1>Github Users</h1>
      </header>
      <Users />
    </div>
  );
}

export default App;
