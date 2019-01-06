/* eslint-disable no-console */
const CronJob = require('cron').CronJob;

const rotaService = require('./rotas/rota.service');

// Generate a new rota every Sunday at 10am
const createRotaJob = new CronJob('0 0 10 * * 0', async () => {
  const currentDate = new Date();
  const message = `[CRON] ${currentDate} -`;
  const rotaExists = await rotaService.rotaExistsForDate(currentDate);

  try {
    if (!rotaExists) {
      await rotaService.create();
      console.log(message, 'Successfully generated new rota');
    } else {
      console.log(message, 'Rota already exists for this week');
    }
  } catch (e) {
    console.error(message, 'Error generating new rota:', e);
  }
});

module.exports = {
  startJobs: () => {
    createRotaJob.start();
  }
};
