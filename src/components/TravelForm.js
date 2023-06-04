// TravelForm.js
import React from 'react';

const TravelForm = () => {
  return (
    <form>
      <label htmlFor="location">Location:</label>
      <input type="text" id="location" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TravelForm;
