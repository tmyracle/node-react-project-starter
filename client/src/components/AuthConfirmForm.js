import React, { useState, useEffect } from "react";
import { Input, Button, Icon, Form } from "semantic-ui-react";
import axios from "axios";

const AuthConfirmForm = (props) => {
  const [verificationCode, setVerificationCode] = useState("");
  const email = props.email;

  const handleVerificiationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      email: email,
      code: verificationCode,
    };

    console.log(payload);

    const res = await axios.post(
      `http://${process.env.REACT_APP_API_DOMAIN}/api/v1/auth/confirm`,
      payload
    );

    if (res.status === 200) {
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      window.location.replace(
        `http://${process.env.REACT_APP_CLIENT_DOMAIN}/dashboard`
      );
    } else {
      console.log(res);
    }

    console.log(res);
  };

  return (
    <div className="p-6 login-container bg-white rounded-lg shadow-lg">
      <div className="login-header mb-6 justify-between overflow-hidden">
        <span className="text-xl font-bold" style={{ lineHeight: "42px" }}>
          Quick Login
        </span>
        <div className="logo rounded-full h-12 w-12 flex items-center justify-center bg-black text-white float-right">
          <span className="text-xs font-bold">Quick</span>
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          fluid
          className="mb-4"
          placeholder="Verification code"
          name="verificationCode"
          value={verificationCode}
          onChange={handleVerificiationCodeChange}
        />
        <Form.Button fluid type="submit" color="black">
          <Icon name="lock" style={{ borderColor: "white", opacity: 1 }} />{" "}
          Confirm
        </Form.Button>
      </Form>
    </div>
  );
};

export default AuthConfirmForm;
