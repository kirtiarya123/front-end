import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../Redux/userSlice';
import UserCard from '../Components/UserCard';
import SearchBar from '../Components/SearchBar';

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { list: users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
