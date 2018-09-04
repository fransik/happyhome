import client, { setAuthHeader, removeAuthHeader } from './api';

export async function loginWithEmail(email, password, callback) {
  const res = await client.post('/auth/email', { email, password });
  const { accessToken } = res.data;

  setAuthHeader(accessToken);
  localStorage.setItem('access_token', accessToken);
  callback();
}

export function logout(callback) {
  removeAuthHeader();
  localStorage.removeItem('access_token');
  callback();
}

export function checkAuth() {
  const accessToken = localStorage.getItem('access_token');

  if (accessToken) {
    setAuthHeader(accessToken);
    return true;
  }

  return false;
}
