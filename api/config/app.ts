import * as peckage from '../package.json';

interface App {
  name:   string,
  host:   string,
  port:   number,
  author: string,
  description : string,
}

const { author, description } = peckage;

const app :App = {
  name : String(process.env.APP_NAME),
  host : String(process.env.APP_HOST),
  port : Number(process.env.APP_PORT),
  author,
  description,
}

export default app
