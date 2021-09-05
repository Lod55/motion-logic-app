import './Table.css';
import React, { useMemo } from 'react';
import { useSortBy, useTable, useFilters } from 'react-table';
import { COLUMS } from './colums';

const Table = ({ cities, onRemove }) => {
  const columns = useMemo(() => COLUMS, []);
  const data = useMemo(() => cities || [], [cities]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useFilters,
      useSortBy
    );

  if (cities.length === 0)
    return (
      <p className="center">
        Таблица на данный момент пуста, сохрание элементы на странице поиска.
      </p>
    );

  return (
    <table {...getTableProps()} className="responsive-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {' '}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="material-icons tiny">keyboard_arrow_up</i>
                      ) : (
                        <i className="material-icons tiny">
                          keyboard_arrow_down
                        </i>
                      )
                    ) : (
                      ' '
                    )}
                  </span>
                </th>
              ))}
            </tr>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th>{column.canFilter ? column.render('Filter') : null}</th>
              ))}
            </tr>
          </>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} onClick={() => onRemove(row.values.id)}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
