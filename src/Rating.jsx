import React from 'react';
import './Rating.css';

function Rating(props) {
  const updatedRating = Math.round(props.children);
  return (
    <div>
      {'★'.repeat(updatedRating)}
      {'☆'.repeat(5 - updatedRating)}
    </div>
  );
}

export default Rating;