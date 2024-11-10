// src/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './User Context';

function UserDetails({userData}) {
  const userData = useContext(UserContext); // Consume context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;