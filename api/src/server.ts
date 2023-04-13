import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import controllers from './controllers';
import { errorHandler } from './exceptions/error-handler';
import logger from './logger/logger';
import httpRequestMiddleware from './middlewares/httpLogger';
import routers from './routers';
import cors from 'cors';

interface Route {
  method: 'get' | 'post' | 'put' | 'delete';
  path: string;
  action: any;
}

class Server {
  private app:any;
  private config: any;

  constructor(option: any) {
    this.config = option;
    this.app = express();
    this.app.use(cors())
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.get('/api/v1', httpRequestMiddleware, controllers.ping.checkALl);
    this.setupRoutes();
    this.app.use(errorHandler)
  }

  public async startServer(): Promise<void> {
    const { port, name, description, author, host } = this.config.app;
    console.dir(this.config.app)
    this.app.listen(port, () => {
      logger.info(`⚡️[server]: Server is running at http://${host}:${port}`);
    });
  }

  private setupRoutes() {
    Object.values(routers).forEach((moduleRouteDef: any) => {
      const router = express.Router();
      moduleRouteDef.routes.forEach((route: Route) => {
        router[route.method](route.path, httpRequestMiddleware, route.action)
      });
      this.app.use(moduleRouteDef.basePath, router);
    });
  }
}

export default Server;
