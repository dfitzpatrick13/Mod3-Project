import React, { useState, useEffect } from 'react';

function Home({ setSearchQuery }) {
  const [seasonalAnime, setSeasonalAnime] = useState([]);
  const [searchQuery, setSearchQueryState] = useState('');

  useEffect(() => {
    const fetchSeasonalAnime = async () => {
      try {
        const url = 'https://myanimelist.p.rapidapi.com/v2/anime/seasonal?year=2024&season=winter';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '3558788312msh9e2a10b42f82567p197369jsn4412d29a977e',
            'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com',
          },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        // Log the result for now; you may want to handle the data differently
        console.log('Winter 2024 Seasonal Anime:', result.data);

        setSeasonalAnime(result.data || []);
      } catch (error) {
        console.error('Error fetching winter 2024 seasonal anime:', error);
      }
    };

    fetchSeasonalAnime();
  }, []);

  const handleSearch = () => {
    setSearchQuery(searchQuery);
  };

  return (
    <div>
      <h2>Winter 2024 Seasonal Anime</h2>
      <ul>
        {seasonalAnime.map((anime) => (
          <li key={anime.node.id}>
            <img src={anime.node.main_picture.medium} alt={anime.node.title} />
            {anime.node.title}
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQueryState(e.target.value)}
          placeholder="Search for an anime..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Home;
