import React from 'react';
import TravelItem from './TravelItem';

const TravelList = ({ destinations }) => {
  return (
    <ul>
      {destinations.map((destination) => (
        <TravelItem key={destination} destination={destination} />
      ))}
    </ul>
  );
};

export default TravelList;
