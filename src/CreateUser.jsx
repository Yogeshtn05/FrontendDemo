import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post('https://backenddemo-a1lk.onrender.com//api/user/create', { name, email, address })
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
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Address</label>
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
