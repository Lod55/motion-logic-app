import React from 'react';

const SearchByColumns = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <input
      placeholder="Поиск"
      type="text"
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default SearchByColumns;
