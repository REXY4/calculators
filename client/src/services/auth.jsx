/* eslint-disable class-methods-use-this */
import { apiAuth } from '../config';

export class Auth {
  async register(body) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const result = await apiAuth.post('/user/register', body, config);
    return result;
  }

  async login(body) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const result = await apiAuth.post('/user/login', body, config);
    return result;
  }

  async getDetailUser(token) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const result = await apiAuth.get('/user/check', config);
    return result;
  }

  async logout(token) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const result = await apiAuth.post('/user/logout', {}, config);
    return result;
  }
}
