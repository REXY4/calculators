import 'reflect-metadata'
import config from '../config';
import Server from './server';
import { DbOrm } from './db/orm';

class Manifest extends Server {
  private dbOrm:any;

  constructor() {
    super({ ...config });
    this.dbOrm =  new DbOrm();
  }

  async setup() : Promise<void> {
    await this.setupSql();
    await this.startServer();
  }

  start(): void {
    this.setup()
  }

  async setupSql():Promise<void> {
    await this.dbOrm.start();
  }
}

export default Manifest;
