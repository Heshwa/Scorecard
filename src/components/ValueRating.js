import React from 'react';

const ValueRating = ({ value, rating }) => {
  let color = '';
  switch (rating) {
    case 'Exceeding':
      color = 'green';
      break;
    case 'Meeting':
      color = 'blue';
      break;
    case 'Partially Meeting':
      color = 'orange';
      break;
    case 'Not Meeting':
      color = 'red';
      break;
    default:
      color = 'black';
      break;
  }

  return (
    <td style={{ color }}>
      {value} ({rating})
    </td>
  );
};

export default ValueRating;
