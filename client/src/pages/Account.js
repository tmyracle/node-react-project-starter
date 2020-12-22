import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
//import { Link } from "react-router-dom";
import { useAuth } from "../lib/authHandler";
import axios from "axios";

const Account = (props) => {
  const [firstName, setFirstName] = useState(props.user.first_name);
  const [lastName, setLastName] = useState(props.user.last_name);
  const [email, setEmail] = useState(props.user.email);
  const [user] = useState(useAuth().user);

  const handleSubmit = async () => {
    const payload = {
      first_name: firstName,
      last_name: lastName,
      user_id: user.id,
    }

    const res = await axios.post(
      `http://${process.env.REACT_APP_API_DOMAIN}/api/v1/users/update`,
      payload
    );

    if (res.status === 200) {
      setFirstName(res.data.user.first_name);
      setLastName(res.data.user.last_name);
      message.success("Account updated")
    } else {
      message.error("Something went wrong")
    }
  };

  if (!props.user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg max-w-lg mx-auto mt-24">
      <div className="text-center text-2xl font-bold mb-6">
        Welcome, {firstName}!
      </div>
      <div className="text-center">
        <Form
          size="big"
          initialValues={{
            firstName,
            lastName,
            email,
          }}
          onFinish={handleSubmit}
        >
          <Form.Item name="firstName">
            <Input
              placeholder="First name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item name="lastName">
            <Input
              placeholder="Last name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item name="email">
            <Input
              placeholder="Email"
              disabled
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item className="justify-items-stretch">
            <Button type="primary" htmlType="submit" className="mb-4" block>
              Save
            </Button>
            <Button htmlType="button" block href="/dashboard">
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Account;
