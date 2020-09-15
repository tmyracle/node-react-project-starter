import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { useAuth } from "../lib/authHandler";

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-2xl mx-auto mt-24 text-center">
      <div className="text-2xl mb-6">
        <span className="font-bold">Quick:</span> the world's quickest checkout.
      </div>
      {!isAuthenticated && (
        <Button as={Link} to="/login">
          Log in
        </Button>
      )}

      {isAuthenticated && (
        <Button as={Link} to="/dashboard">
          View dashboard
        </Button>
      )}
    </div>
  );
};

export default LandingPage;
