import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <Link to={`/user/${user.id}`} className="text-blue-500 underline">
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
