import React from "react";
import { Button } from "antd";
import LandingHeader from "./LandingHeader";

const Features = () => {
  return (
    <div className="bg-white w-screen h-screen sm:px-16 sm:py-4 px-4 py-2">
      <LandingHeader />
      <div className="max-w-2xl mx-auto mt-24 text-center">
        <div className="text-2xl font-bold mb-6">Features</div>
        <Button href="/login">Log in</Button>
      </div>
    </div>
  );
};

export default Features;
