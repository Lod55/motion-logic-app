import React, { useState } from 'react';
import FormSearch from '../FormSearch/FormSearch';
import CitiesList from '../CitiesList/CitiesList';

const SearchPage = ({ searchValue, onChange, onSave, addFullList }) => {
  const [isSearch, setIsSearch] = useState(false);

  const handleChange = (keyword) => {
    onChange(keyword);
  };

  const saveHandler = (id) => {
    onSave(id);
  };

  return (
    <>
      <FormSearch
        onChange={handleChange}
        setIsSearch={setIsSearch}
        addFullList={addFullList}
        cities={searchValue}
      />
      <CitiesList
        cities={searchValue}
        onSave={saveHandler}
        isSearch={isSearch}
      />
    </>
  );
};

export default SearchPage;
