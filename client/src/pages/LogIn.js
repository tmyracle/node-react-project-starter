import React, { useState, useEffect } from "react";
import { Input, Button, Icon, Form } from "semantic-ui-react";
import AuthLoginForm from "../components/AuthLoginForm";
import AuthConfirmForm from "../components/AuthConfirmForm";

const LogIn = () => {
  const [authStep, setAuthStep] = useState(0);
  const [email, setEmail] = useState("");

  const handleChange = (data) => {
    setEmail(data.user.email);
    setAuthStep(1);
  };

  return (
    <div className="max-w-lg mx-auto mt-24">
      {authStep == 0 ? (
        <AuthLoginForm onChange={handleChange} />
      ) : (
        <AuthConfirmForm email={email} />
      )}
    </div>
  );
};

export default LogIn;
