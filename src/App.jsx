import { useEffect, useState } from 'react';
import React from 'react';
import CityForm from './components/CityForm';
import Search from './components/Search';
import CityList from './components/CityList';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then(response => response.json())
      .then(data => setCities(data));
  }, []); 

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleAdd(newItem) {
    setCities((prevCities) => [...prevCities, newItem]); 
  }

  function handleDelete(id) {
    fetch(`http://localhost:3000/countries/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        const updatedCities = cities.filter(city => city.id !== id);
        setCities(updatedCities);
      })
      .catch((error) => {
        console.error("Error deleting city:", error);
      });
  }
  

  return (
    <div>
      <Search setSearch={setSearch} />
      <CityForm onAdd={handleAdd} />
      <CityList filteredCities={filteredCities} onDelete={handleDelete} />
    </div>
  );
}

export default App;
