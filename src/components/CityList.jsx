import React from 'react'
import City from './City'

function CityList({filteredCities,onDelete}) {
  return (
    <>
    <div>CityList</div>
    <City filteredCities={filteredCities} onDelete={onDelete}/>
    </>
  )
}

export default CityList