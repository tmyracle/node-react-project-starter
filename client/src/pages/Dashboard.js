import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useAuth } from "../lib/authHandler";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg max-w-lg mx-auto mt-24">
      <div className="profile-img-placeholder text-center">
        <Icon name="user" style={{ borderColor: "white", opacity: 1 }} />
      </div>
      <div className="text-center text-2xl font-bold mb-6">
        Welcome, {user.first_name}!
      </div>
      <div className="text-center">
        <Button as={Link} to="/account" color="black">
          Manage Account
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
