import axios from 'axios';

const client = createClient();

function createClient() {
  const proto = process.env.REACT_APP_PROTO || 'http';
  const domain = process.env.REACT_APP_DOMAIN || 'localhost:3000';

  return axios.create({ baseURL: `${proto}://${domain}/api` });
}

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
