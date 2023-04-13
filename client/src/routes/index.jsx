import { BrowserRouter, Route, Routes } from 'react-router-dom';
import defenition from './defenition';
import PrivateRoute from './PrivateRoute';
// import PrivateRoute from './PrivateRoute';

function RouteMain({ auth }) {
  return (
    <BrowserRouter>
      <Routes>
        {defenition
          .filter((fil) => fil.private === false)
          .map((item) => {
            return <Route key={item.path} path={item.path} element={item.element} />;
          })}
        <Route path="/" element={<PrivateRoute auth={auth} />}>
          {defenition
            .filter((fil) => fil.private === true)
            .map((item) => (
              <Route path={item.path} element={item.element} />
            ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteMain;
