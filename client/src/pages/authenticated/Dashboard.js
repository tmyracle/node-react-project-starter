import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  if (!props.user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg max-w-lg mx-auto mt-24">
      <div className="profile-img-placeholder text-center"></div>
      <div className="text-center text-2xl font-bold mb-6">
        Welcome, {props.user.first_name}!
      </div>
      <div className="text-center">
        <Button block>
          <Link to="/account">Manage Account</Link>
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
