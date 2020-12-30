import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Layout } from "antd";
import { HomeOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Navigation = withRouter((props) => {
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div className="logo-text tracking-wider text-white text-xl text-center pt-4 mb-2">
        Project Name
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={[props.location.pathname]}>
        <Menu.Item key="/dashboard" icon={<HomeOutlined />}>
          <Link to="/dashboard">Home</Link>
        </Menu.Item>
        <Menu.Item key="/account" icon={<UserOutlined />}>
          <Link to="/account">Account</Link>
        </Menu.Item>
        <Menu.Item key="logOut" icon={<LogoutOutlined />} style={{}}>
          <Link to="" onClick={() => props.handleLogout()}>
            Sign Out
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
});

export default Navigation;
