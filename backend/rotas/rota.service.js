const moment = require('moment');

const { Rota } = require('../database');

async function create() {
  const rotaData = await getStartAndEndDate();
  const rota = await Rota.create(rotaData);

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

module.exports = { create };
