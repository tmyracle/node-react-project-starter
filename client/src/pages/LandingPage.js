import React from "react";
import { Button } from "antd";
import { useAuth } from "../lib/authHandler";

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-2xl mx-auto mt-24 text-center">
      <div className="text-2xl mb-6">
        <span className="font-bold">Node/React Kit:</span> boilerplate for bootstrapping a web app.
      </div>
      {!isAuthenticated && <Button href="/login">Log in</Button>}

      {isAuthenticated && <Button href="/dashboard">View dashboard</Button>}
    </div>
  );
};

export default LandingPage;
