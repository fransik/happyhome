import client from './api';

export async function getUpcoming() {
  const { data } = await client.get('/rotas/upcoming');
  return data;
}
