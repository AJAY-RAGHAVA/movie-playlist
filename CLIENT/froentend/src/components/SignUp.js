import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css'; // Import your CSS file

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://movie-library-cl10.onrender.com/api/users/signup', formData);
      console.log(response.data);
      navigate('/'); // Navigate to home after successful signup
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" onChange={handleChange} value={formData.username} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} value={formData.email} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} value={formData.password} />
        </div>
        <button type="submit">Sign Up</button>
        <br />
        <br />
        <p>Already have an account?&nbsp;&nbsp;&nbsp;&nbsp; <a href="/signin">Signin</a></p>
      </form>
    </div>
  );
};

export default Signup;
