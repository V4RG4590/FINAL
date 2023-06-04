import React, { useState } from 'react';
import TravelForm from '../components/TravelForm';
import TravelList from '../components/TravelList';

const TravelListPage = () => {
  const [destinations, setDestinations] = useState([]);

  const handleAddDestination = (destination) => {
    setDestinations((prevDestinations) => [...prevDestinations, destination]);
  };

  return (
    <div>
      <h1>Travel List Page</h1>
      <TravelForm onSubmit={handleAddDestination} />
      <TravelList destinations={destinations} />
    </div>
  );
};

export default TravelListPage;
