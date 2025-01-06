import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://backenddemo-eb4f.onrender.com/api/fetch')
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data.users); // Make sure your backend sends users in response.data.users
        } else {
          setError('Error fetching user data');
        }
      })
      .catch((error) => {
        setError('There was an error fetching the user data!');
        console.error(error);
      });
  }, []);

  const deleteid = (id) => {
    axios.delete(`https://backenddemo-eb4f.onrender.com/api/delete/${id}`)
      .then((results) => {
        console.log("User deleted");
        setUsers(users.filter(user => user._id !== id));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <h1>User</h1>
      <Link to="/add">Create User</Link>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <Link to={`/update/${user._id}`}>Update User</Link>
                <button onClick={() => deleteid(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;