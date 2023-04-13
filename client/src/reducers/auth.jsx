/* eslint-disable default-param-last */
const initialState = {
  isLogin: false,
  user: null,
  token: null
};

const Case = {
  login: 'LOGIN',
  logout: 'LOGOUT',
  register: 'REGISTER',
  checkUser: 'CHECK_USER'
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Case.login:
      localStorage.setItem('verified_token', payload.token);
      return {
        ...state,
        isLogin: true,
        token: payload.token
      };
    case Case.checkUser:
      return {
        ...state,
        user: payload
      };
    case Case.logout:
      sessionStorage.clear();
      return {
        ...state,
        isLogin: false,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
