import client, { setAuthHeader } from './api';

export async function loginWithEmail(email, password) {
  const res = await client.post('/auth/email', { email, password });
  setAuthHeader(res.data.accessToken);
}
