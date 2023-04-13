/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { Auth } from '../services';
// eslint-disable-next-line no-unused-vars
const Register = (data, setAuth) => async (dispatch) => {
  try {
    const authentication = new Auth();
    const result = await authentication.register(data);
    if (result.status === 200) {
      await dispatch({
        type: 'SHOW_MODAL_ALERT',
        payload: {
          status: true,
          message: 'Register Success',
          variant: 'success'
        }
      });

      await setTimeout(() => {
        setAuth(false);
      }, 1000);

      setTimeout(() => {
        dispatch({
          type: 'SHOW_MODAL_ALERT',
          payload: {
            status: false,
            message: '',
            variant: ''
          }
        });
      }, 2000);
    }
  } catch (error) {
    // console.log('ini error', error);
  }
};

const Login = (data, router) => async (dispatch) => {
  try {
    const authentication = new Auth();
    const body = {
      email: data.email,
      password: data.password
    };
    const result = await authentication.login(body);
    if (result.status === 200) {
      await dispatch({
        type: 'LOGIN',
        payload: result.data.data
      });
      router('/');
      await dispatch({
        type: 'SHOW_MODAL_ALERT',
        payload: {
          status: true,
          message: 'Login Success',
          variant: 'success'
        }
      });

      setTimeout(() => {
        dispatch({
          type: 'SHOW_MODAL_ALERT',
          payload: {
            status: false,
            message: '',
            variant: ''
          }
        });
      }, 1000);
    }
  } catch (error) {
    // console
  }
};

const logout = (token) => async (dispatch) => {
  console.log('ini token', sessionStorage.getItem('verified_token'));
  try {
    const authentication = new Auth();
    const response = await authentication.logout(token);
    dispatch({
      type: 'LOGOUT'
    });
  } catch (err) {
    // console.log(err);
  }
};

const getDetailUser = (token) => async (dispatch) => {
  try {
    const authentication = new Auth();
    const response = await authentication.getDetailUser(token);
    if (response.status === 200) {
      dispatch({
        type: 'CHECK_USER',
        payload: response.data.data
      });
    }
  } catch (err) {
    // console.log(err)
  }
};

export { Register, Login, getDetailUser, logout };
