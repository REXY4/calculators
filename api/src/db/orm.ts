import { createConnection } from 'typeorm';
// tslint:disable-next-line: no-duplicate-imports
import { DataSource } from 'typeorm';
import logger from '../logger/logger';
import config from '../../config';
import { repo } from './dataset';

export class DbOrm {
  private config:any;
  private createConnect:any;

  constructor() {
    const { type, host, port,  username, password, database } = config.db;
    this.config = {
      type,
      host,
      port,
      username,
      password,
      database,
    }
  };

  async setup () {
    await this.connect();
    await this.initialization();
  }

  async connect()  {
    const connect = await createConnection({
      ...this.config,
    }).then(() => {
      logger.info(`Connected to database ${this.config.type} success`);
    }).catch((error) => {
      logger.error(`Error connecting to database ${this.config.type}: ${error}`);
      throw error
    });
    return connect
  }

  async initialization() {
    const result = repo.
    initialize()
    .then(() => {
      logger.info('Initialization success')
    })
    .catch((err) => {
      // tslint:disable-next-line: prefer-template
      logger.error('Initialization err :' + err)
    })
  }

  start() {
    this.setup();
  }
}
