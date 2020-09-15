import React from "react";
import { useAuth } from "../lib/authHandler";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Welcome to the dashboard {user.first_name} {user.last_name}!
    </div>
  );
};

export default Dashboard;
