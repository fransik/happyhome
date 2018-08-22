const moment = require('moment');

const { Rota, Task, TaskTemplate, User } = require('../database');

async function create() {
  const rotaData = await getStartAndEndDate();
  const rota = await Rota.create(rotaData);
  await generateRota(rota.get().id);

  return rota;
}

async function getStartAndEndDate() {
  const rotaCount = await Rota.count();
  let startsAt;
  let endsAt;

  if (rotaCount <= 0) {
    startsAt = moment()
      .startOf('isoWeek')
      .add(1, 'weeks');
  } else {
    const lastRota = await Rota.findAll({ limit: 1, order: [['id', 'DESC']] });
    startsAt = moment(lastRota[0].endsAt).add(1, 'days');
  }

  endsAt = startsAt.clone().add(6, 'days');

  return { startsAt, endsAt };
}

async function generateRota(rotaId) {
  const queryOptions = { attributes: ['id'], where: { active: true } };
  const [templates, users] = await Promise.all([
    TaskTemplate.findAll(queryOptions),
    User.findAll(queryOptions)
  ]);

  return Promise.all(
    templates.map((template, index) => {
      const rotation = (index + rotaId) % users.length;
      return Task.create({
        rotaId,
        userId: users[rotation].get().id,
        tasktemplateId: template.get().id
      });
    })
  );
}

module.exports = { create };
