import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useAuth } from "../lib/authHandler";
import PhoneNumber from "../components/PhoneNumber";

const Profile = (props) => {
  const [firstName, setFirstName] = useState(props.user.first_name);
  const [lastName, setLastName] = useState(props.user.last_name);
  const [dateOfBirth, setDateOfBirth] = useState(
    props.user.date_of_birth || ""
  );
  const [email, setEmail] = useState(props.user.email);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get(
          `http://${process.env.REACT_APP_API_DOMAIN}/api/v1/profiles/${props.user.profile_id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setProfile(res.data);
        setPhoneNumber(res.data.default_phone_number);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, []);

  const handleCancelButton = () => {
    console.log("I'm gonna cancel the form action.");
  };

  const handleSubmit = () => {
    console.log("Gonna submit the form now!");
  };

  if (!props.user) {
    return <div></div>;
  }

  return (
    <div className="p-6 mt-6">
      <div className="max-w-xl p-6 mx-auto mt-24">
        <div className="bg-white px-6 py-12 font-bold text-2xl rounded-lg mb-8">
          Welcome, {props.user.first_name}!
        </div>
        <Form size="big" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              width={8}
              placeholder="First Name"
              name="firstName"
              value={firstName}
            />
            <Form.Input
              width={8}
              placeholder="Last Name"
              name="lastName"
              value={lastName}
            />
          </Form.Group>
          <Form.Input
            className="mb-4"
            placeholder="Date of Birth (MM/DD/YYYY)"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => {
              setDateOfBirth(e.target.value);
            }}
          />
          <Form.Input
            className="mb-4"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Input
            className="mb-4"
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber || ""}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <PhoneNumber phoneNumber="" />
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

export default Profile;
