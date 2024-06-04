// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams,useNavigate } from 'react-router-dom';
// import '../index.css'; // Import your CSS file


// const Card = () => {
//   const { email, sampleName } = useParams();
//   const [movieNames, setMovieNames] = useState([]);

//   useEffect(() => {
//     fetchMovieData();
//   }, []);

//   const fetchMovieData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:2000/api/lists/${email}`);
//       const filteredList = response.data.filter(item => item.listName === sampleName);
      
//       if (filteredList.length > 0) {
//         const names = filteredList.map(item => item.movieName);
//         setMovieNames(names);
//       } else {
//         console.error('No movie data found for the provided sample name');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // const logout = () => {
//   //   // Add your logout logic here
//   //   console.log("Logged out");
//   //   navigate(`/home`); // Navigate to login page after logout
//   // };

//   // const goBack = () => {
//   //   // Add your back navigation logic here
//   //   console.log("Going back");
//   //   navigate(''); // Navigate to the previous page
//   // };

//   return (
//     <div className="container">
//       <div className="App">
//         <button className="logout-button" onClick={() => navigate(`/home`)}>Logout</button>
//         <button className="back-button" onClick={() => navigate(`/Movie/${email}`)}>Back</button>
//       </div>
//       <h2>Movie Details</h2>
//       <div className="card">
//         <div className="card-content">
//           <h3>Movies IN: {sampleName}</h3>
//           <ul>
//             {movieNames.map((movie, index) => (
//               <li key={index}>{movie}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;




import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css'; // Import your CSS file

const Card = () => {
  const { email, sampleName } = useParams();
  const [movieNames, setMovieNames] = useState([]);
  const navigate = useNavigate();

  const fetchMovieData = useCallback(async () => {
    try {
      const response = await axios.get(`http://movie-library-cl10.onrender.com/api/lists/${email}`);
      const filteredList = response.data.filter(item => item.listName === sampleName);
      
      if (filteredList.length > 0) {
        const names = filteredList.map(item => item.movieName);
        setMovieNames(names);
      } else {
        console.error('No movie data found for the provided sample name');
      }
    } catch (error) {
      console.error(error);
    }
  }, [email, sampleName]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <div className="container">
      <div className="App">
        <button className="logout-button" onClick={() => navigate(`/`)}>Logout</button>
        <button className="back-button" onClick={() => navigate(`/Movie/${email}`)}>Back</button>
      </div>
      <h2>Movie Details</h2>
      <div className="card">
        <div className="card-content">
          <h3>Movies IN: {sampleName}</h3>
          <ul>
            {movieNames.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
