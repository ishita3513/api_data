// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://randomuser.me/api/?page=1&results=5&seed=abc')
      .then((response) => {
        setUserData(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <div className="card-container">
        {userData.map((user) => (
          <div key={user.login.uuid} className="card">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            <div>
              <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Location:</strong> {`${user.location.city}, ${user.location.country}`}</p>
              <p><strong>Username:</strong> {user.login.username}</p>
              <p><strong>DOB:</strong> {new Date(user.dob.date).toLocaleDateString()}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Cell:</strong> {user.cell}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
