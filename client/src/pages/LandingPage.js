import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const LandingPage = () => {
  const [user, setUser] = useState();

  return (
    <div className="max-w-2xl mx-auto mt-24 text-center">
      <div className="text-2xl mb-6">
        <span className="font-bold">Quick:</span> the world's quickest checkout.
      </div>
      <Button as={Link} to="/login">
        Log in
      </Button>
    </div>
  );
};

export default LandingPage;
