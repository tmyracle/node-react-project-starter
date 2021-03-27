import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";

const AuthLoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      email: email,
      first_name: firstName,
      last_name: lastName,
    };

    const res = await axios.post("/api/v1/auth/start", payload);

    if (res.status === 200) {
      props.onChange(res.data);
    } else {
      console.log("Error starting authentication");
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
      <Form name="login" onFinish={handleSubmit}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email address" },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            onChange={handleEmailChange}
          />
        </Form.Item>
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Please enter your first name" }]}
        >
          <Input placeholder="First name" onChange={handleFirstNameChange} />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: "Please enter your last name" }]}
        >
          <Input placeholder="Last name" onChange={handleLastNameChange} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthLoginForm;
