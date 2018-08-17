const { TaskTemplate } = require('../database');
const { AlreadyExistsError } = require('../error');

async function create(data) {
  const [template, created] = await TaskTemplate.findOrCreate({
    where: { name: data.name },
    defaults: data
  });

  if (!created) {
    throw new AlreadyExistsError('A template with this name already exists');
  }

  return template;
}

function listAll() {
  return TaskTemplate.findAll();
}

module.exports = { create, listAll };
