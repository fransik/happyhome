import client, { setAuthHeader, removeAuthHeader } from './api';

export async function loginWithEmail(email, password, callback) {
  const res = await client.post('/auth/email', { email, password });
  setAuthHeader(res.data.accessToken);
  callback();
}

export function logout(callback) {
  removeAuthHeader();
  callback();
}
