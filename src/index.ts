import 'module-alias/register'

import helmet from 'helmet';
import { connect } from 'mongoose';
import { StartProjectInit } from "@tsclean/core";
import config from "../config";
import { AppContainer } from './application/config/app';


async function run(): Promise<void> {
  await connect(config.MONGO_URI);
  console.log('DB Mongo connected')
  const app = await StartProjectInit.create(AppContainer);
   app.use(helmet());
   await app.listen(config.PORT, () => console.log('Running on port: ' + config.PORT))
}

run();
