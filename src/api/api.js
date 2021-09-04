import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import cities from './russian-cities.json';
import { parserDataCity } from '../utils/parser';

const mock = new MockAdapter(axios);

mock.onGet('/cities').reply(200, {
  cities: parserDataCity(cities),
});

export const getData = () => axios.get('/cities');
