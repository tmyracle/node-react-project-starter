import React from "react";
import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Navigation from "./components/Navigation";
import { useAuth } from "./lib/authHandler";

const { Content } = Layout;

const AuthenticatedApp = () => {
  const { user } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace(`http://${process.env.REACT_APP_CLIENT_DOMAIN}/`);
  };

  return (
    <Router>
      <Layout>
        <Navigation handleLogout={handleLogout} />
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: "24px 16px 0", flexGrow: 1 }}>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/account">
                <Account user={user} />
              </Route>
              <Route path="/*">
                <Redirect to="/dashboard" />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default AuthenticatedApp;
