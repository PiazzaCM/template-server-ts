import express, { Express } from 'express';
import helmet from 'helmet';
import routes from './routes/server.routes';

export class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.configureRoutes();
  }

  private configureMiddleware(): void {
    this.app.use(helmet());
    this.app.use(express.json());
  }

  private configureRoutes(): void {
    this.app.use('/api', routes);
  }

  public getApp(): Express {
    return this.app;
  }
}
