import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import HomeRoutes from './src/routes/homeRoutes';
import UserRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', HomeRoutes);
    this.app.use('/users/', UserRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
