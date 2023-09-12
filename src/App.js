// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import './styles.css'

function App() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers').then((response) => {
      setBeers(response.data);
    });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeers(filtered);
  };

  return (
    <div className="App">
      <h1>Punk API Beers</h1>
      <SearchBar handleSearch={handleSearch} />
      <div className="card-container">
        {filteredBeers.length > 0
          ? filteredBeers.map((beer) => (
              <Card key={beer.id} beer={beer} />
            ))
          : beers.map((beer) => <Card key={beer.id} beer={beer} />)}
      </div>
      <footer>Made by Yogesh baghel</footer>
    </div>
  );
}

export default App;
