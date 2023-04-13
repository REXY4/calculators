interface Object {
  [props:string] : any;
}

const db = <Object>{
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  synchronize: true,
  logging: false,
  entities: [
    '../src/entities/user/*.ts',
  ],
  migrations: [
    '../migrations/*.ts',
  ],
  cli: {
    migrationsDir: '../migrations',
    entitiesDir: '../src/entities/user',
  },
}

export default db;
