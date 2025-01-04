import {useEffect, useState} from 'react'
import React from 'react'
import CityForm from './components/CityForm'
import Search from './components/Search'
import CityList from './components/CityList'


function App() {
  const [cities, setCities] = useState([])
  const[search,setSearch]=useState("")
  useEffect(()=>{
    fetch("http://localhost:3000/countries")
     .then(response=>response.json())
     .then(data=>setCities(data))
  })
  const filteredCities=cities.filter(city=>city.name.toLowerCase().includes(search.toLowerCase()))
  function handleAdd(newItem){
    setCities(...cities,newItem)
  }
  function handleDelete(id){
    const updatedCities=cities.filter(city=>city.id !==id)
    setCities(updatedCities)
  }

  return (
   <div>
    <Search setSearch={setSearch}/>
    <CityList filteredCities={filteredCities} onDelet={handleDelete}/>
    <CityForm  onAdd={handleAdd}/>
   </div>
  )
}

export default App;
