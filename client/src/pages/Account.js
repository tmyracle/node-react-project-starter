import React, { useState } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useAuth } from "../lib/authHandler";

const Account = (props) => {
  const [firstName, setFirstName] = useState(props.user.first_name);
  const [lastName, setLastName] = useState(props.user.last_name);
  const [email, setEmail] = useState(props.user.email);

  const handleCancelButton = () => {
    console.log("I'm gonna cancel the form action.");
  };

  const handleSubmit = () => {
    console.log("Gonna submit the form now!");
  };

  if (!props.user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg max-w-lg mx-auto mt-24">
      <div className="profile-img-placeholder text-center">
        <Icon name="user" style={{ borderColor: "white", opacity: 1 }} />
      </div>
      <div className="text-center text-2xl font-bold mb-6">
        Welcome, {firstName}!
      </div>
      <div className="text-center">
        <Form size="big" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              width={8}
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <Form.Input
              width={8}
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Input
            className="mb-4"
            placeholder="Email"
            disabled
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="flex flex-row-reverse">
            <Button type="submit" color="black">
              Save
            </Button>
            <Button onClick={handleCancelButton} color="grey">
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Account;
