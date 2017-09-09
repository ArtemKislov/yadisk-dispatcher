import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Redux from 'Redux';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Redux);

if (module.hot) {
  module.hot.accept('./router', () => {
    const newApp = require('./router').default;
    render(newApp);
  });
}
