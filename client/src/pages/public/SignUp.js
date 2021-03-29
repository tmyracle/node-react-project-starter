import React, { useState } from "react";
import AuthSignUpForm from "../../components/AuthSignUpForm";
import AuthConfirmForm from "../../components/AuthConfirmForm";

const SignUp = () => {
  const [authStep, setAuthStep] = useState(0);
  const [email, setEmail] = useState("");

  const handleChange = (data) => {
    setEmail(data.user.email);
    setAuthStep(1);
  };

  return (
    <div className="max-w-lg mx-auto mt-24">
      {authStep === 0 ? (
        <AuthSignUpForm onChange={handleChange} />
      ) : (
        <AuthConfirmForm email={email} />
      )}
    </div>
  );
};

export default SignUp;
