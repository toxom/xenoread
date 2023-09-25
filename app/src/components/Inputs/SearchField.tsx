import React, { FC } from 'react';
import './Inputs.scss';

interface SearchFieldProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

const SearchField: FC<SearchFieldProps> = ({ placeholder = "Search", onSearch }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-field">
      <span className="search-glyph">🔍</span>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className="placeholder-label"
      />
      <span className="dictation">🎙</span>
    </div>
  );
};

export default SearchField;
