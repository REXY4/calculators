/* eslint-disable no-shadow */
import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavbarPrimary } from './components/navbars';
import RouteMain from './routes';
import { getDetailUser, logout } from './actions/auth';

function App({ isLogin, user, getDetailUser, logout }) {
  const token = localStorage.getItem('verified_token');
  useEffect(() => {
    getDetailUser(token);
  }, [isLogin]);
  return (
    <>
      {isLogin && <NavbarPrimary user={user} logout={logout} token={token} />}
      <RouteMain auth={isLogin} />
    </>
  );
}

const mapToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
    user: state.auth.user
  };
};

export default connect(mapToProps, { getDetailUser, logout })(App);
