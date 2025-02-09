import { useEffect, useState } from 'react';
import React from 'react';
import CityForm from './components/CityForm';
import Search from './components/Search';
import CityList from './components/CityList';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [cityToEdit, setCityToEdit] = useState(null);

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
      .then(() => {
        const updatedCities = cities.filter(city => city.id !== id);
        setCities(updatedCities);
      })
      .catch((error) => {
        console.error("Error deleting city:", error);
      });
  }

  function handleEdit(updatedCity) {
    const updatedCities = cities.map((city) =>
      city.id === updatedCity.id ? updatedCity : city
    );
    setCities(updatedCities);
    setCityToEdit(null); 
  }

  function startEditing(city) {
    setCityToEdit(city);
  }

  return (
    <div>
      <h2>This is Simple Crud in React</h2>
      <Search setSearch={setSearch} />
      <CityList filteredCities={filteredCities} onDelete={handleDelete} onEdit={startEditing} />
      <CityForm onAdd={handleAdd} cityToEdit={cityToEdit} onEdit={handleEdit} />
    </div>
  );
}

export default App;
