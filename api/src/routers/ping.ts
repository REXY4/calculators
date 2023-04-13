import controllers from '../controllers'

interface Object {
  [props:string] : any
}

const moduleRouteDef:Object = {
  basePath: '/api/v1/ping',
  description: 'User APIs',
  routes : [
    {
      active: true,
      method: 'get',
      path: '/',
      summary: 'PIng',
      description: 'Check Api Pings',
      action: [
        controllers.ping.checkALl,
      ],
    },
  ],
}

export default moduleRouteDef;
