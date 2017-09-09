import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Redirect } from 'react-router-dom';
import history from 'Services/history';
import { asyncGetDirRequest } from 'Redux/ducks/disk'
import { store } from 'Redux';
import Main from './containers/main';


const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <AuthCallback path="/authCallback" />
        <PrivateRoute path="/*" component={Main} />
      </div>
    </Router>
  );
};

const AuthCallback = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(data) => {
      const token = /access_token=([^&]+)/.exec(document.location.hash)[1];
      localStorage.setItem('token', token);
      return (<Redirect to={{ pathname: '/', state: { from: data.location } }} />)
    }}
  />
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!localStorage.getItem('token')) {
        window.location.href = 'https://oauth.yandex.ru/authorize?response_type=token&client_id=accf0d1eb45c4367b6af8120767aa013';
      } else {
        store.dispatch(asyncGetDirRequest(props.location.pathname));
        return (<Component {...props} />);
      }
    }}
  />
)

AuthCallback.propTypes = {
  component: PropTypes.func,
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default Routes;
