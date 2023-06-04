import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const TravelPage = () => {
  const [name, setName] = useState(''); // State for storing the name input
  const [place, setPlace] = useState(''); // State for storing the place input
  const history = useHistory(); // Access the history object for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new profile
      const response = await axios.post('https://644721ab50c25337441ee804.mockapi.io/Students', {
        name,
        place,
      });
      const profileId = response.data.id;
      // Redirect to the profile page with the newly created profile ID
      history.push(`/profile/${profileId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Where Would You Like to Visit?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Place to Visit:
          <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TravelPage;
