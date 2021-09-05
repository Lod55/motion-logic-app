import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <h2 className="center">Функциональность проекта</h2>
      <br />
      <ul className="collection with-header center">
        <li className="collection-header">
          <h3>Общие подходы</h3>  
        </li>
        <li className="collection-item">
          В качестве симуляции API использован Mock-adapter
        </li>
        <li className="collection-item">
          Список городов взят из публичного репозитория на Gh{' '}
          <a href="https://github.com/pensnarik/russian-cities">перейти</a>
        </li>
        <li className="collection-item">
          При обновлении страницы браузера актуальный список город берется из
          localStorage
        </li>
        <li className="collection-header">
          <h3>Поиска</h3>  
        </li>
        <li className="collection-item">
          Динамический поиск по введенному запросу начиная от 3х символов
        </li>
        <li className="collection-item">Вывод количетва результатов поиска</li>
        <li className="collection-item">Кнопка сброса поисковой выдачи</li>
        <li className="collection-item">
          Кнопка вывода всех доступных городов
        </li>
        <li className="collection-item">
          При отсуствии результатов поиска вывод соотвествующего сообщения
        </li>
        <li className="collection-item">
          Возможность сохранить город нажатием на элемент поисковой выдачи
        </li>
        <li className="collection-header">
          <h3>Таблица</h3>  
        </li>
        <li className="collection-item">
          При отсувтсвии сохраненных городов вывод соответсвующего сообщения
        </li>
        <li className="collection-item">
          Реализована сортировка данных таблицы по столбцам при нажатии на
          заголовок в шапке таблицы
        </li>
        <li className="collection-item">Реализован поиск по солбцам таблицы</li>
        <li className="collection-item">
          Реализована возможность удаления нажатием на соотвествующий элемент с
          подтверждением
        </li>
      </ul>

      <Link to="/search" className="waves-effect waves-light btn mb100">
        <i className="material-icons left">search</i>Перейти к поиску
      </Link>
    </>
  );
};

export default AboutPage;
