import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeDetails from './AnimeDetails';
import RegistrationForm from './registraionFrom';
import NavBar from './NavBar';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <br />
        <Routes>
          <Route path="/AnimeDetails" element={<AnimeDetails />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
