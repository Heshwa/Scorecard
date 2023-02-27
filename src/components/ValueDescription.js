import React from 'react';

const ValueDescription = ({ value, description }) => {
  return (
    <div>
      <h4>{value} Description:</h4>
      <p>{description}</p>
    </div>
  );
};

export default ValueDescription;
