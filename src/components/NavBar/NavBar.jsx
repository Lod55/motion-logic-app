import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper  teal darken-2">
        <Link to="/" className="brand-logo center">
          Поиск городов
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <NavLink activeClassName="menu-item_active" to="/about">
              Информация
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="menu-item_active" to="/search">
              Поиск
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="menu-item_active" to="/table">
              Таблица
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
