import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";

import Dashboard from "./Components/Dashbord/Dashboard/Dashboard";
import AddEployee from "./Components/Dashbord/AddEployee/AddEployee";
import Login from "./Components/Login/Login";


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
      <Dashboard/>
        </Route>
        <Route path="/dashboard">
        <Dashboard/>
        </Route>
        <Route path="/addEpmloyee">
          <AddEployee/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
      </Switch>

  </Router>
  );
}

export default App;
