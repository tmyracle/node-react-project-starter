import React from "react";
import { useAuth } from "../lib/authHandler";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div></div>;
  }

  return (
    <div className="p-6 mt-6 bg-gray-500">
      <h1>Welcome back {user.first_name}!</h1>
      <div className="text-2xl">Profile page</div>
      <div className="text-base">This is where the profile page will go</div>
    </div>
  );
};

export default Profile;
