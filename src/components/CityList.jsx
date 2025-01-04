import React from 'react';
import City from './City';
import styled from 'styled-components';

const CityListContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

function CityList({ filteredCities, onDelete }) {
  return (
    <CityListContainer>
      <Title>City List</Title>
      <City filteredCities={filteredCities} onDelete={onDelete} />
    </CityListContainer>
  );
}

export default CityList;
