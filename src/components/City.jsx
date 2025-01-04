import React from 'react';
import styled from 'styled-components';

const CityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; 
  gap: 20px; 
  margin: 20px;
`;

const CityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 220px; /* Fixed width for better layout control */
  flex-grow: 1;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 45%; /* 2 cards per row on smaller screens */
  }

  @media (max-width: 480px) {
    width: 90%; /* 1 card per row on mobile */
  }
`;


const CityTitle = styled.h4`
  margin: 0;
  color: #333;
`;

const CityInfo = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  color: #666;
`;

const CityImage = styled.img`
  width: 100px;
  height: auto;
  margin: 10px 0;
  border-radius: 4px;
`;

const DeleteButton = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #e53935;
  }
`;

function City({ filteredCities, onDelete }) {
  return (
    <CityContainer>
      {filteredCities.map((city) => (
        <CityCard key={city.id}>
          <CityTitle>{city.name}</CityTitle>
          <CityInfo>Population: {city.population}</CityInfo>
          <CityInfo>Capital: {city.capital}</CityInfo>
          <CityInfo>Continent: {city.continent}</CityInfo>
          <CityInfo>Language: {city.languages}</CityInfo>
          <CityImage src={city.flag} alt={city.name} />
          <DeleteButton onClick={() => onDelete(city.id)}>Delete</DeleteButton>
        </CityCard>
      ))}
    </CityContainer>
  );
}

export default City;
