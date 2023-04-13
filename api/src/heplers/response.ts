import express, { Response, Request } from 'express'
import logger from '../logger/logger';

interface ResObject {
  statusCode : number,
  status : string,
  message : string,
  data : any
}

function handleResponse(messages:string, data:any) {
  const responseObj: ResObject = {
    statusCode: 200,
    status: 'success',
    message : messages,
    data,
  };
  return responseObj;
}

export default handleResponse;
