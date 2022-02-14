import 'module-alias/register'
import helmet from 'helmet';
import { connect } from 'mongoose';
import { StartProjectInit } from "@tsclean/core";
import { AppContainer } from './application/config/app';
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import { MONGODB_URI, PORT } from './application/config/enviroment';

async function run(): Promise<void> {
  console.log(MONGODB_URI)
  await connect(MONGODB_URI);
  console.log('DB Mongo connected')
  // const agendajs  = new Agenda({
  //   db: {address: config.MONGO_URI, collection: 'OrdersByDay'},
  //   processEvery: '20 seconds',
  // })

  
  // (async function () {
  //   await agenda.start();
  //   await agenda.every('24 hours', 'addDailyOrder')
  // })();
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Pipedrive and Bling Integration API - LinkApi",
        version: "1.0.0",
        description: "",
        servers: [
          {
            url:"http:localhost:" + PORT
          },
        ],
      }
    },
    apis: [`${__dirname}/api/*.ts`]
  }
  
  const specs= swaggerJsDoc(options);
  const app = await StartProjectInit.create(AppContainer);
  app.use(helmet());
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
  await app.listen(PORT, () => console.log('Running on port: ' + PORT))
}

run();
