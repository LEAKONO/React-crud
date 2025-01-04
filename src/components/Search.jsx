import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 250px;
  margin-bottom: 15px;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

function Search({ setSearch }) {
  return (
    <SearchContainer>
      <Heading>Search</Heading>
      <SearchInput 
        type="text" 
        placeholder="Search by name" 
        onChange={(e) => setSearch(e.target.value)} 
      />
    </SearchContainer>
  );
}

export default Search;
