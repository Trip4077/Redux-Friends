import React from 'react';

const Friend = props => {
  return(
    <div>
      <h1>{props.data.name}</h1>
      <h2>{props.data.age}</h2>
      <h3>{props.data.email}</h3>
    </div>
  );
}

export default Friend;
