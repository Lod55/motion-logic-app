import React, { useState } from 'react';
import './FormSearch.css';

const FormSearch = ({ onChange, setIsSearch, addFullList, cities }) => {
  const [value, setValue] = useState('');
  const [isFullList, setIsFulllist] = useState(false);

  const handleChange = (e) => {
    const keyword = e.target.value;
    keyword.length > 3 ? setIsSearch(true) : setIsSearch(false);

    setValue(keyword);
    onChange(keyword);
  };

  const clickHandler = () => {
    onChange('');
    setValue('');
    setIsFulllist(false);
  };

  const clickHandlerFullList = () => {
    setIsFulllist(true);
    setIsSearch(false);
    addFullList();
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="search"
        placeholder="Введите название города"
        value={value}
        onChange={handleChange}
      />
      <label htmlFor="search" className="active">
        Поиск
      </label>
      <div>
        <button
          type="reset"
          className={`waves-effect waves-light btn ${
            !isFullList && cities.length === 0 && 'disabled'
          }`}
          onClick={clickHandler}
        >
          Сбросить
        </button>
        <p>{`Кол-во городов: ${cities.length}`}</p>
        <button
          type="reset"
          className={`waves-effect waves-light btn ${isFullList && 'disabled'}`}
          onClick={clickHandlerFullList}
        >
          Весь список
        </button>
      </div>
    </div>
  );
};

export default FormSearch;
