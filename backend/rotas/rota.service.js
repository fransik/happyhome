const moment = require('moment');

const { Rota } = require('../database');

async function create() {
  const rotaCount = await Rota.count();
  const rotaData = await getStartAndEndDate(rotaCount);

  const rota = await Rota.create(rotaData);

  return rota;
}

async function getStartAndEndDate(rotaCount) {
  let startsAt;
  let endsAt;

  if (rotaCount <= 0) {
    startsAt = moment()
      .startOf('isoWeek')
      .add(1, 'weeks');
  } else {
    const latestRota = await Rota.findAll({ limit: 1, order: 'id DESC' });
    startsAt = moment(latestRota[0].endsAt).add(1, 'days');
  }

  endsAt = startsAt.clone().add(6, 'days');

  return { startsAt, endsAt };
}

module.exports = { create };
