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

// TODO: reorganize project:
//      (V) 7. Close all style problems:
//      (V) 7.1 fix mobile version
//      (V) 7.2 check and fix slowly animation of menu opening + add border-radius: x x x x / x x x x;
//      (V) 7.3 Fix Animation problems with Profile field change and Menu opens lugs
//      (V) 7.4 Fix crossbrowser issues. (Phone Input in Profile)
//  10. Final cross browser checking.
//  11. Readme.md creating (describe you features: content all dynamic (category etc.), random data in cypress tests etc).
//      Necessarily indicate where i got design
//  12. Upwork page creating. Video demo creation. Cypress work demonstration via video.  Necessarily indicate where i got design
//  13. Add Yandex tracker

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
        console.log('sw start');
      // @ts-ignore
      const reg = await container.register('../sw.js');
    }
  });
}
