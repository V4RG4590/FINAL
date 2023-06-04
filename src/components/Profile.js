import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch the profile data from the API
    axios
      .get('https://644721ab50c25337441ee804.mockapi.io/Students')
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <h3>{profile.name}</h3>
      <p>Location: {profile.location}</p>
    </div>
  );
};

export default Profile;
