import React from "react";
import "./App.css";
import { getUsers } from "./utils/api";
import UserSearch from "./components/UserSearch";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Github Users</h1>
      </header>
      <UserSearch />
    </div>
  );
}

export default App;
