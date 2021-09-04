import React from 'react';

const CitiesList = ({ cities, onSave, isSearch }) => {
  if (isSearch && cities?.length === 0) {
    return (
      <p className="center">
        По вашему запрому ничего не найдено, введите другое значение в поисковую
        строку
      </p>
    );
  }
  return (
    <ul className="cities">
      {cities?.map((city) => {
        const classes = ['city'];

        if (city.isSave) {
          classes.push('saved', 'disabled');
        }

        return (
          <li className={classes.join(' ')} key={city.id}>
            <label>
              <input
                type="checkbox"
                checked={city.isSave}
                onChange={onSave.bind(null, city.id)}
              />
              <span>{city.name}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default CitiesList;
