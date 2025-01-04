import React from 'react'

function Search({setSearch}) {
  return (

    <div>
        <h1>Search</h1>
        <input type="text" placeholder='Search by name' onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Search