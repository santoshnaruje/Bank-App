import { Route, Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element: Component, path, ...rest }) => {
  const accountNumber = localStorage.getItem('accountNumber');

  return (
    <Route
      {...rest}
      path={path}
      element={accountNumber ? <Component /> : <Navigate to="/login" />}
    />
  );
};
 