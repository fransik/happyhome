import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export function setAuthHeader(token) {
  const header = 'Bearer ' + token;

  if (client.defaults.headers.common['Authorization'] !== header) {
    client.defaults.headers.common['Authorization'] = header;
    return;
  }
}

export function removeAuthHeader() {
  delete client.defaults.headers.common['Authorization'];
}

export default client;
