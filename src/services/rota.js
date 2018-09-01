import client from './api';

export async function getUpcoming() {
  const res = await client.get('/rotas/upcoming');
  return res.data;
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
