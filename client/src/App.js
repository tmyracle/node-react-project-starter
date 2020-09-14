import React from "react";
import "./App.css";
import "./tailwind.output.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
