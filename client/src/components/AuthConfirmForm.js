import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

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
        <div className="logo rounded-full h-12 w-12 flex items-center justify-center bg-black text-white float-right">
          <span className="text-xs font-bold">TM</span>
        </div>
      </div>
      <Form {...layout} name="login" onFinish={handleSubmit}>
        <Form.Item label="Verification code" name="verificationCode">
          <Input onChange={handleVerificiationCodeChange} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthConfirmForm;
