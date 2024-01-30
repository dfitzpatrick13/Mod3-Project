// AnimeDetails.js

import React, { useState, useEffect } from 'react';
import './index.css'

const apiKey = '3558788312msh9e2a10b42f82567p197369jsn4412d29a977e';
const animeId = 52299;

const AnimeDetails = () => {
  const [animeInfo, setAnimeInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://myanimelist.p.rapidapi.com/anime/${animeId}`;
        const headers = {
          'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com',
          'X-RapidAPI-Key': apiKey,
        };

        const response = await fetch(apiUrl, { headers });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAnimeInfo(data);
      } catch (error) {
        console.error('Fetch failed:', error.message);
      }
    };

    fetchData();
  }, []);

  if (!animeInfo) {
    return <div>Loading...</div>;
  }

  const {
    title,
    picture_url,
    synopsis,
    information: { type, episodes, status, aired, genres },
    statistics: { score, ranked, popularity, members, favorites },
  } = animeInfo;

  return (
    <div className="anime-details-container">
      <h1 className="anime-title">{title}</h1>
      <img src={picture_url} alt={`${title} cover`} className="anime-image" />
      <p className="anime-synopsis">{synopsis}</p>
      <div className="anime-info-container">
        <p className="anime-info">Type: {type[0].name}</p>
        <p className="anime-info">Episodes: {episodes}</p>
        <p className="anime-info">Status: {status}</p>
        <p className="anime-info">Aired: {aired}</p>
        <p className="anime-info">Genres: {genres.map(genre => genre.name).join(', ')}</p>
        <p className="anime-info">Score: {score}</p>
        <p className="anime-info">Ranked: {ranked}</p>
        <p className="anime-info">Popularity: {popularity}</p>
        <p className="anime-info">Members: {members}</p>
        <p className="anime-info">Favorites: {favorites}</p>
      </div>
    </div>
  );
};

export default AnimeDetails;
