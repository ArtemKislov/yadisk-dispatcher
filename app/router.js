import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from 'Services/history';
import { asyncGetDirRequest } from 'Redux/ducks/disk';
import yaDiskConst from 'Constants/yaDisk';
import { store } from 'Redux';
import Main from './containers/main';


const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <AuthCallback path="/authCallback" />
        <PrivateRoute path="/*" component={Main} />
      </Switch>
    </Router>
  );
};

const AuthCallback = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(data) => {
      const token = /access_token=([^&]+)/.exec(document.location.hash)[1];
      localStorage.setItem('token', token);
      return (<Redirect to={{ pathname: '/', state: { from: data.location } }} />);
    }}
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!localStorage.getItem('token')) {
        window.location.href = yaDiskConst.authURL;
      } else {
        store.dispatch(asyncGetDirRequest(props.location.pathname));
        return (<Component {...props} />);
      }
      return (<div>Redirect...</div>);
    }}
  />
);

AuthCallback.propTypes = {
  component: PropTypes.func,
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default Routes;
