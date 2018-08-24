const moment = require('moment');

const { database, Task, TaskTemplate, Rota } = require('../database');

function listUpcoming(userId) {
  const { Op } = database;
  const start = moment().startOf('month');
  const end = moment().endOf('month');
  const dateFmt = 'YYYY-MM-DD';

  return Rota.findAll({
    attributes: ['id', 'startsAt', 'endsAt'],
    where: {
      startsAt: { [Op.between]: [start.format(dateFmt), end.format(dateFmt)] },
      '$tasks.userId$': userId
    },
    include: [
      {
        model: Task,
        attributes: ['id', 'completedAt'],
        include: [
          {
            model: TaskTemplate,
            as: 'details',
            attributes: ['name', 'description']
          }
        ]
      }
    ]
  });
}

module.exports = { listUpcoming };
