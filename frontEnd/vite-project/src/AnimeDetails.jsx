import React, { useState, useEffect } from 'react';
import './index.css';

const apiKey = '3558788312msh9e2a10b42f82567p197369jsn4412d29a977e';

const AnimeDetails = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async () => {
    try {
      if (searchInput.trim() === '') {
        setSearchResults([]);
        return;
      }

      const searchUrl = `https://api.jikan.moe/v3/search/anime?q=${searchInput}&limit=5`;
      const response = await fetch(searchUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSearchResults(data.results);
      setShowResults(true);
    } catch (error) {
      console.error('Search failed:', error.message);
    }
  };

  const handleSelect = async (malId) => {
    try {
      const apiUrl = `https://myanimelist.p.rapidapi.com/anime/${malId}`;
      const headers = {
        'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey,
      };

      const response = await fetch(apiUrl, { headers });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSelectedAnime(data);
    } catch (error) {
      console.error('Fetch failed:', error.message);
    }
  };

  return (
    <div className="anime-details-container">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for anime..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {showResults && (
        <div className="search-results-container">
          {searchResults.map((result) => (
            <div key={result.mal_id} className="search-result" onClick={() => handleSelect(result.mal_id)}>
              {result.title}
            </div>
          ))}
        </div>
      )}

      {selectedAnime && (
        <>
            <h1 className="anime-title">{animeInfo.title}</h1>
          <img src={animeInfo.picture_url} alt={`${animeInfo.title} cover`} className="anime-image" />
          <p className="anime-synopsis">{animeInfo.synopsis}</p>
          <div className="anime-info-container">
            <p className="anime-info">Type: {animeInfo.information.type[0].name}</p>
            <p className="anime-info">Episodes: {animeInfo.information.episodes}</p>
            <p className="anime-info">Status: {animeInfo.information.status}</p>
            <p className="anime-info">Aired: {animeInfo.information.aired}</p>
            <p className="anime-info">
              Genres: {animeInfo.information.genres.map((genre) => genre.name).join(', ')}
            </p>
            <p className="anime-info">Score: {animeInfo.statistics.score}</p>
            <p className="anime-info">Ranked: {animeInfo.statistics.ranked}</p>
            <p className="anime-info">Popularity: {animeInfo.statistics.popularity}</p>
            <p className="anime-info">Members: {animeInfo.statistics.members}</p>
            <p className="anime-info">Favorites: {animeInfo.statistics.favorites}</p>
          </div>
        
        </>
      )}
    </div>
  );
};

export default AnimeDetails;
