import React from "react";
import { Button } from "antd";
//import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="landing-container">
      <div className="max-w-2xl mx-auto mt-24 text-center">
        <div className="text-2xl font-bold mb-6">Features</div>
        <Button href="/login">Log in</Button>
      </div>
    </div>
  );
};

export default Features;
