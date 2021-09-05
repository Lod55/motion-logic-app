import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { getData } from './api/api';
import { searchByName } from './utils/search';

import NavBar from './components/NavBar/NavBar';
import SearchPage from './components/pages/SearchPage';
import AboutPage from './components/pages/AboutPage';
import TablePage from './components/pages/TablePage';

function App() {
  const [cities, setCities] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [citiesSave, setCitiesSave] = useState([]);

  const [isFirstLoading, setIsFirstLoading] = useState(true);

  const handleChange = (keyword) => {
    if (keyword.length < 3) return setSearchValue([]);
    setSearchValue(searchByName(cities, keyword));
  };

  const saveHandler = (id) => {
    setSearchValue((prev) =>
      prev.map((city) =>
        city.id === id && !city.isSave ? { ...city, isSave: true } : city
      )
    );

    setCities((prev) =>
      prev.map((city) =>
        city.id === id && !city.isSave ? { ...city, isSave: true } : city
      )
    );
  };

  const removeHandler = (id) => {
    const shoudRemove = window.confirm(
      'Вы уверены, что хотите удалить элемент?'
    );
    if (shoudRemove) {
      setCities((prev) =>
        prev.map((city) => (city.id === id ? { ...city, isSave: false } : city))
      );
    }
  };

  const addFullList = () => {
    setSearchValue(cities);
  };

  const getCitiesData = async () => {
    try {
      const { data } = await getData();
      setCities(data.cities);
    } catch {
      console.log('Запрос городов произошел с ошибкой!');
    }
  };

  useEffect(() => {
    if (isFirstLoading) return;
    localStorage.setItem('cities', JSON.stringify(cities));
    setCitiesSave(cities.filter((city) => city.isSave));
  }, [cities, isFirstLoading]);

  useEffect(() => {
    const currentCities = JSON.parse(localStorage.getItem('cities'));

    setIsFirstLoading(false);
    if (!currentCities) getCitiesData();

    if (currentCities) {
      setCitiesSave(currentCities.filter((city) => city.isSave));
      setCities(currentCities);
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <AboutPage />
          </Route>

          <Route path="/search">
            <SearchPage
              onSave={saveHandler}
              searchValue={searchValue}
              onChange={handleChange}
              addFullList={addFullList}
            />
          </Route>

          <Route path="/table">
            <TablePage cities={citiesSave} onRemove={removeHandler} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
