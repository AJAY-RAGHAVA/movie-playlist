import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import '../index.css'; // Import your CSS file

const MovieList = () => {
  const { email, movieName } = useParams();
  const navigate = useNavigate();
  const [sampleNames, setSampleNames] = useState([]);
  const [selectedSample, setSelectedSample] = useState('');
  
  useEffect(() => {
    fetchSampleNames();
  }, []);

  const fetchSampleNames = async () => {
    try {
      const response = await axios.get(`https://movie-playlist-zr2o.vercel.app/api/samples/${email}`);
      setSampleNames(response.data.map(sample => sample.name));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToList = async () => {
    try {
      await axios.post('http://localhost:2000/api/lists', {
        email,
        movieName,
        listName: selectedSample
      });
      // Optionally, you can redirect the user or show a success message here
      console.log('Sample added to list successfully');
      navigate(`/movie/${email}`);
    } catch (error) {
      console.error('Error adding sample to list:', error);
    }
  };

  // const logout = () => {
  //   // Add your logout logic here
  //   console.log("Logged out");
  //   navigate(`/home`); // Navigate to login page after logout
  // };

  const handleLogout = () => {
    // Perform any necessary logout logic here (e.g., clearing tokens)
    navigate('/'); // Redirect to the home or login page
  };

  // const goBack = () => {
  //   // Add your back navigation logic here
  //   console.log("Going back");
  //   navigate(''); // Navigate to the previous page
  // };

  const handleChange = (e) => {
    setSelectedSample(e.target.value);
  };

  return (
    <div>
      <div className="App">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        <button className="back" onClick={() => navigate(`/Movie/${email}`)}>Back</button>
      </div>
      <form className='container'>
        <h2>Select List Name</h2>
        <label htmlFor="sampleSelect"><h3>Select a List:</h3></label>
        <select id="sampleSelect" value={selectedSample} onChange={handleChange} style={{ fontSize: '15px' }}>
          <option value="" >Select List</option>
          {sampleNames.map((sample, index) => (
            <option key={index} value={sample}>{sample}</option>
          ))}
        </select>
        <br />
        <br />
        <button type="button" onClick={handleAddToList} className='add'>Add</button>
      </form>
    </div>
  );
};

export default MovieList;
