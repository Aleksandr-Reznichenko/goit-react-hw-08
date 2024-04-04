import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { refreshUser } from '../../redux/auth/operations';
import { lazy, useEffect } from 'react';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import Layout from '../Layout/Layout';

const Home = lazy(() => import('../../pages/Home/Home'));
const Registration = lazy(() =>
  import('../../pages/Registration/Registration')
);
const Login = lazy(() => import('../../pages/Login/Login'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Registration />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
