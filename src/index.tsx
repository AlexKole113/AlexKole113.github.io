import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from '@/store';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@/saga';
import App from './components/App';

import './styles/index.scss';

const sagaMiddleware = createSagaMiddleware();
const { store, history } = createStore({ sagaMiddleware });
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app'),
);

if ('serviceWorker' in navigator) {
  self.addEventListener('load', async () => {
    const container = navigator.serviceWorker;
    if (container.controller === null) {
      // @ts-ignore
      const reg = await container.register('../sw.js');
    }
  });
}
