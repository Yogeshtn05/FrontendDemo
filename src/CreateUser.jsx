import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateUser.css'; // Import the CSS file

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post('https://backenddemo-eb4f.onrender.com/api/add', { name, email, address })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
