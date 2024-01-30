
import React, { useState, useEffect } from 'react';
import AnimeDetails from './AnimeDetails';
import './index.css'
import NavBar from './navbar';
import Home from './Home';

function App() {
  const [data, setData] = useState('');

  // useEffect(() => {
  //   fetch('/api')
  //     .then((response) => response.text())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);



  return (
    <div>
      <NavBar/>
      <br></br>
      <Home/>




  </div>
  );
}

export default App;
