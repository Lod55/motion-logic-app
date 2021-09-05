import SearchByColumns from '../SearchByColumns/SearchByColumns';

export const COLUMS = [
  {
    Header: 'id',
    accessor: 'id',
    Filter: SearchByColumns,
  },
  {
    Header: 'Название города',
    accessor: 'name',
    Filter: SearchByColumns,
  },
  {
    Header: 'Население',
    accessor: 'population',
    Filter: SearchByColumns,
  },
  {
    Header: 'Область',
    accessor: 'subject',
    Filter: SearchByColumns,
  },
  {
    Header: 'Район',
    accessor: 'district',
    Filter: SearchByColumns,
  },
];
