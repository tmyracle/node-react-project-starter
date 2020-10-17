import React, { useState } from "react";
import { Icon, Form } from "semantic-ui-react";
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

    const res = await axios.post(
      `http://${process.env.REACT_APP_API_DOMAIN}/api/v1/auth/start`,
      payload
    );

    if (res.status === 200) {
      props.onChange(res.data);
    } else {
      console.log(res);
    }
  };

  return (
    <div className="p-6 login-container bg-white rounded-lg shadow-lg">
      <div className="login-header mb-6 justify-between overflow-hidden">
        <span className="text-xl font-bold" style={{ lineHeight: "42px" }}>
          Manager Tools Login
        </span>
        <div className="logo rounded-full h-12 w-12 flex items-center justify-center bg-black text-white float-right">
          <span className="text-xs font-bold">MT</span>
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Form.Input
            fluid
            className="mb-4"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Field>
        <Form.Group>
          <Form.Input
            width={8}
            placeholder="First name"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <Form.Input
            width={8}
            placeholder="Last name"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </Form.Group>
        <div className="px-12 py-4 terms text-center text-sm text-gray-500">
          By clicking the button below you agree to the nonexistant{" "}
          <a href="https://www.youtube.com/watch?v=NPGUIpv-JxI">Terms</a> and{" "}
          <a href="https://www.youtube.com/watch?v=5_sfnQDr1-o">
            Privacy Policy
          </a>
          .
        </div>
        <Form.Button fluid type="submit" color="black">
          <Icon name="lock" style={{ borderColor: "white", opacity: 1 }} />{" "}
          Login
        </Form.Button>
      </Form>
    </div>
  );
};

export default AuthLoginForm;
