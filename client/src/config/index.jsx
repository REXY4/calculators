import axios from 'axios';

const apiAuth = axios.create({
  baseURL: process.env.REACT_APP_API
});

export { apiAuth };
