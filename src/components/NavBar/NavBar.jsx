import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper  teal darken-2">
        <NavLink to="/" className="brand-logo center">
          Поиск городов
        </NavLink>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <NavLink activeClassName="active" to="/">
              Информация
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/search">
              Поиск
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/table">
              Таблица
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;