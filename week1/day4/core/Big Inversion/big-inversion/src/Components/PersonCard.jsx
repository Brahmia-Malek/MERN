import React from 'react';

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props.person;

  return (
    <div className="PersonCard">
      <h2>{lastName}, {firstName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
};

export default PersonCard;