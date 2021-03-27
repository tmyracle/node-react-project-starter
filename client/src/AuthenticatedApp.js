import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./pages/authenticated/Dashboard";
import Account from "./pages/authenticated/Account";
import Navigation from "./components/Navigation";
import { withToken } from "./lib/authHandler";

const { Content } = Layout;

const AuthenticatedApp = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "/api/v1/auth/is_authenticated",
          withToken()
        );
        if (res.data.isAuthenticated) {
          setUser(res.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };

  const handleChange = (updatedUser) => {
    setUser(updatedUser);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Layout>
        <Navigation handleLogout={handleLogout} />
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: "24px 16px 0", flexGrow: 1 }}>
            <Switch>
              <Route path="/dashboard">
                <Dashboard user={user} />
              </Route>
              <Route path="/account">
                <Account user={user} onChange={handleChange} />
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
