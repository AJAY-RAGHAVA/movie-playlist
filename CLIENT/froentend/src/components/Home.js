import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Import your CSS file

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to Movie Library App</h2><br/>
      <p>Discover and explore your favorite movies!</p>
      <p>And create your own playlists based on your choice of watching.</p><br/>
      <div className="buttons">
        <Link to="/signup" className="button">Sign Up</Link>
        <Link to="/signin" className="button">Sign In</Link>
      </div>
    </div>
  );
};

export default Home;
