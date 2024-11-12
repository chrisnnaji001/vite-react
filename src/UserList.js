// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // You can create this file for custom styles

function UserList() {
  // State to hold the list of users
  const [listOfUsers, setListOfUsers] = useState([]);

  // Fetch users from JSONPlaceholder using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <ul className="user-list">
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
npm
export default UserList;
