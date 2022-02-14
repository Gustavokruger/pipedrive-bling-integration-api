import 'module-alias/register'
import helmet from 'helmet';
import { connect } from 'mongoose';
import { StartProjectInit } from "@tsclean/core";
import config from "../config";
import { AppContainer } from './application/config/app';
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

async function run(): Promise<void> {
  await connect(config.MONGO_URI);
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
            url:"http:localhost:" + config.PORT
          },
        ],
      }
    },
    apis: ["./infraestructure/entry-points/api/*.ts"]
  }

  const specs= swaggerJsDoc(options);
  const app = await StartProjectInit.create(AppContainer);
  app.use(helmet());
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
  await app.listen(config.PORT, () => console.log('Running on port: ' + config.PORT))
}

run();
