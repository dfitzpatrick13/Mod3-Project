
import React, { useState, useEffect } from 'react';
import AnimeDetails from './AnimeDetails';
import './index.css'
import NavBar from './navbar';

function App() {
  const [data, setData] = useState('');




  return (
    <div>
      <NavBar/>
      <br></br>
      <AnimeDetails />




  </div>
  );
}

export default App;
