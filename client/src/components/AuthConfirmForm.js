import React, { useState } from "react";
import { Form, Input, Button } from "antd";
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

    const res = await axios.post("/api/v1/auth/confirm", payload);

    if (res.status === 200) {
      const { token } = res.data;
      localStorage.setItem("token", token);
      window.location.replace("/dashboard");
    }
  };

  return (
    <div className="p-6 login-container bg-white rounded-lg shadow-lg">
      <div className="login-header mb-6 justify-between overflow-hidden">
        <span className="text-xl font-bold" style={{ lineHeight: "42px" }}>
          Login
        </span>
      </div>
      <div className="mb-4 text-gray-700">
        Check your email for a one-time use verification code
      </div>
      <Form layout="vertical" name="login" onFinish={handleSubmit}>
        <Form.Item name="verificationCode">
          <Input
            placeholder="Verification code"
            onChange={handleVerificiationCodeChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthConfirmForm;
