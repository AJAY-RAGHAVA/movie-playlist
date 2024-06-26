import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css'; // Import your CSS file

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://movie-library-cl10.onrender.com/api/users/signin', formData);
      console.log(response.data);
      navigate(`/movie/${formData.email}`); // Navigate to movie component after successful signin
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} value={formData.email} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} value={formData.password} />
        </div>
        <button type="submit">Sign In</button>
        <br />
        <br />
        <p>Don't have an account?&nbsp;&nbsp;&nbsp;&nbsp; <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Signin;
