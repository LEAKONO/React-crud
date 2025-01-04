import React, { useState } from 'react'

function CityForm({onAdd}) {
    const[formData,setFormData]=useState({
        name:'',
        population:'',
        capital:'',
        continent:'',
        language:'',
        flag:''

    })
function handleChange(e){
    const {name,value}=e.target
    setFormData((previous)=>({
        ...previous,
        [name]:value
    }))
}
function handleSubmit(e){
e.preventDefault();
    fetch("http://localhost:3000/countries",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>onAdd(data))
}
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
        <input type="number" placeholder="Population" name="population" value={formData.population} onChange={handleChange}/>
        <input type="text" placeholder="Capital" name="capital" value={formData.capital} onChange={handleChange}/>
        <input type="text" placeholder="Continent" name="continent" value={formData.continent} onChange={handleChange}/>
        <input type="text" placeholder="Language" name="language" value={formData.language} onChange={handleChange}/>
        <input type="text" placeholder="Flag URL" name="flag" value={formData.flag} onChange={handleChange}/>
    </form>
  )
}

export default CityForm