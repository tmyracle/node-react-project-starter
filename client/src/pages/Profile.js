import React, { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState();

  return (
    <div className="p-6 mt-6 bg-gray-500">
      <div className="text-2xl">Profile page</div>
      <div className="text-base">This is where the profile page will go</div>
    </div>
  );
};

export default Profile;
