import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
  return (
    <input
      type="text"
      placeholder="type to search"
      className="search-input form-control"
    />
  );
};

export default SearchPanel;
