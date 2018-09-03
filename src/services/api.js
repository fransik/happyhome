import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export function setAuthHeader(token) {
  client.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export function removeAuthHeader() {
  delete client.defaults.headers.common['Authorization'];
}

export default client;
