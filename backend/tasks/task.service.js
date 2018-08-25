const { Task } = require('../database');

async function update(id, userId, data) {
  const task = await Task.findOne({ where: { id, userId } });

  if (!task) {
    // TODO: change to propper error
    throw new Error('Resource not found');
  }

  if (data.completed === true) {
    task.completedAt = new Date().toISOString();
  }

  if (data.completed === false) {
    task.completedAt = null;
  }

  return task.save();
}

module.exports = { update };
