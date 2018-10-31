import moment from 'moment';

import client from './api';

export async function getUpcoming() {
  const res = await client.get('/rotas/upcoming');
  const rotas = res.data;
  const rotaIndex = findCurrentRotaIndex(rotas);

  return { rotas, rotaIndex };
}

export function findTaskIndex(id, tasks) {
  const index = tasks.findIndex(task => task.id === id);

  if (index === undefined) {
    throw new Error('Task not found');
  }

  return index;
}

export async function completeTask(id, task) {
  const res = await client.patch(`/tasks/${id}`, {
    completed: !task.completedAt
  });

  return res.data.completedAt;
}

function findCurrentRotaIndex(rotas) {
  const startOfWeek = moment()
    .startOf('isoWeek')
    .format('YYYY-MM-DD');
  const index = rotas.findIndex(rota => rota.startsAt === startOfWeek);

  if (index >= 0) {
    return index;
  }

  return 0;
}
