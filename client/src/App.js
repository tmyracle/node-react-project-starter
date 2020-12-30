import React from "react";
import "./App.css";
import "./tailwind.output.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn";
import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./lib/authHandler";

const App = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div>
      {isAuthenticated === true && user && <AuthenticatedApp user={user} />}
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
