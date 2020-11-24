import React from "react";
//import { Link } from "react-router-dom";
import { Button } from "antd";
import { useAuth } from "../lib/authHandler";

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-2xl mx-auto mt-24 text-center">
      <div className="text-2xl mb-6">
        <span className="font-bold">Manager Tools:</span> a collection of
        helpful tools for managers.
      </div>
      {!isAuthenticated && <Button href="/login">Log in</Button>}

      {isAuthenticated && <Button href="/dashboard">View dashboard</Button>}
    </div>
  );
};

export default LandingPage;
