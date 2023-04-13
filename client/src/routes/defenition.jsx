import Home from '../views/Home';
import Main from '../views/Main';

const defenition = [
  {
    path: '/login',
    private: false,
    element: <Main />
  },
  {
    path: '/',
    private: true,
    element: <Home />
  }
];

export default defenition;
