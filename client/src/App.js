import React from "react";
import "./App.css";
import "./tailwind.output.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import { useAuth } from "./lib/authHandler";

const App = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div>
      {isAuthenticated === true && (
        <Router>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/profile">{user && <Profile user={user} />}</Route>
            <Route path="/*">
              <Redirect to="/dashboard" />
            </Route>
          </Switch>
        </Router>
      )}

      {isAuthenticated === false && (
        <Router>
          <Switch>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default App;
