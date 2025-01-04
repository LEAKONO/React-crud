import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

function CityForm({ onAdd, cityToEdit, onEdit }) {
  const [formData, setFormData] = useState({
    name: '',
    population: '',
    capital: '',
    continent: '',
    language: '',
    flag: '',
  });

  useEffect(() => {
    if (cityToEdit) {
      setFormData({
        name: cityToEdit.name,
        population: cityToEdit.population,
        capital: cityToEdit.capital,
        continent: cityToEdit.continent,
        language: cityToEdit.language,
        flag: cityToEdit.flag,
      });
    }
  }, [cityToEdit]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (cityToEdit) {
      fetch(`http://localhost:3000/countries/${cityToEdit.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => onEdit(data));
    } else {
      fetch("http://localhost:3000/countries", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => onAdd(data));
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
      <Input type="number" placeholder="Population" name="population" value={formData.population} onChange={handleChange} />
      <Input type="text" placeholder="Capital" name="capital" value={formData.capital} onChange={handleChange} />
      <Input type="text" placeholder="Continent" name="continent" value={formData.continent} onChange={handleChange} />
      <Input type="text" placeholder="Language" name="language" value={formData.language} onChange={handleChange} />
      <Input type="text" placeholder="Flag URL" name="flag" value={formData.flag} onChange={handleChange} />
      <SubmitButton type="submit">{cityToEdit ? 'Update Country' : 'Add Country'}</SubmitButton>
    </FormContainer>
  );
}

export default CityForm;
