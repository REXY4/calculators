import { DataSource } from 'typeorm'
import config from '../../config'

const { type, host, port, username, password, database } =  config.db;
import { User } from '../entities/user';

export const repo = new DataSource({
  type,
  host,
  port,
  username,
  password,
  database,
  entities: [User],
  logging: false,
  synchronize: true,
})
