import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const ProfilePage = () => {
  const { profileId } = useParams(); // Get the profileId from the URL
  const [profile, setProfile] = useState(null); // State to store the profile data
  const [updatedName, setUpdatedName] = useState(''); // State for the updated name
  const [updatedPlace, setUpdatedPlace] = useState(''); // State for the updated place
  const history = useHistory(); // Access the history object for navigation

  useEffect(() => {
    // Fetch the profile data from the API
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`https://644721ab50c25337441ee804.mockapi.io/Students/${profileId}`);
        setProfile(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, [profileId]);

  const handleDelete = async () => {
    try {
      // Delete the profile from the API
      await axios.delete(`https://644721ab50c25337441ee804.mockapi.io/Students/${profileId}`);
      // Redirect to the home page or any other appropriate page
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Update the profile with the new values
      await axios.put(`https://644721ab50c25337441ee804.mockapi.io/Students/${profileId}`, {
        name: updatedName,
        place: updatedPlace,
      });
      // Redirect to the updated profile page
      history.push(`/profile/${profileId}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!profile) {
    return <div>Loading...</div>; // Show a loading message while fetching the profile data
  }

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
        </label>
        <label>
          Place to Visit:
          <input
            type="text"
            value={updatedPlace}
            onChange={(e) => setUpdatedPlace(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProfilePage;
