import * as dotenv from 'dotenv'
dotenv.config();

import app from './app';
import db from './db'
export default {
  app,
  db,
}
