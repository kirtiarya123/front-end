import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserDetail = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.list.find((user) => user.id === parseInt(id))
  );

  if (!user) return <p>User not found!</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <h3 className="text-xl font-bold mt-4">Address:</h3>
      <p>{user.address.street}, {user.address.city}</p>
      <h3 className="text-xl font-bold mt-4">Company:</h3>
      <p>{user.company.name}</p>
      <p>{user.company.catchPhrase}</p>
    </div>
  );
};

export default UserDetail;
