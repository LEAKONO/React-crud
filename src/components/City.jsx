import React from 'react'

function City({filteredCities,onDelete}) {
  return (
    <div>
        {filteredCities.map(city=>(
            <div key={city.id}>
                <h2>{city.name}</h2>
                <p>Population: {city.population}</p>
                <p>Capital: {city.capital}</p>
                <p>Continent: {city.continent}</p>
                <p>Language: {city.language}</p>
                <img src={city.flag} alt={city.name}/>  <br/>  <br/>  <br/>  <br/>
                <button onClick={()=>onDelete(city.id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default City