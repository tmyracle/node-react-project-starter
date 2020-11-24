import React from "react";
import { Button } from "antd";
//import { Link } from "react-router-dom";
import { useAuth } from "../lib/authHandler";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg max-w-lg mx-auto mt-24">
      <div className="profile-img-placeholder text-center"></div>
      <div className="text-center text-2xl font-bold mb-6">
        Welcome, {user.first_name}!
      </div>
      <div className="text-center">
        <Button block href="/account">
          Manage Account
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
