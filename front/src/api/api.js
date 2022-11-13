import { axios } from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/API/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});
