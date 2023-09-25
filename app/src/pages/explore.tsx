import React from 'react';
import '../styles/App.scss';

import SearchField from '../components/Inputs/SearchField';


const Explore: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log(`Searching for: ${query}`);
    // implement your search logic here
  };

  return (
    <div className="Page-container">
      <div className="title-container">
      <h1>Explore</h1>
        <SearchField onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Explore;
