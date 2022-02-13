import 'module-alias/register'
import agenda, { Agenda } from 'agenda'
import helmet from 'helmet';
import { connect } from 'mongoose';
import { StartProjectInit } from "@tsclean/core";
import config from "../config";
import { AppContainer } from './application/config/app';
import { addOrderByDaySchedule } from './infrastructure/schedules/addOrderByDaySchedule';


async function run(): Promise<void> {
  await connect(config.MONGO_URI);
  console.log('DB Mongo connected')

  const agenda  = new Agenda({
    db: {address: config.MONGO_URI, collection: 'OrdersByDay'},
    processEvery: '20 seconds',
  })
  agenda._mongoUseUnifiedTopology = true;
  (async function () {
    await agenda.start();
    await agenda.every('24 hours', 'insert won orders ')
  })();
  agenda.define('insert won orders', async() => addOrderByDaySchedule());
  
  const app = await StartProjectInit.create(AppContainer);
   app.use(helmet());
   await app.listen(config.PORT, () => console.log('Running on port: ' + config.PORT))
}

run();
