import { Response, Request } from 'express';
import response from '../heplers/response';

async function checkALl(req:Request, res:Response) {
  try {
    res.send(response('Ping:Ok', null))
  } catch (error) {
    res.status(500).send({
      statusCode : 500,
      message  :'Internal Server Error',
    })
  }
}

export default {
  checkALl,
}
