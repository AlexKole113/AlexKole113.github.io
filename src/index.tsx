import React from "react";
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
//  (V) 1. API
//  (V) 1.1 Create common API class with static functions;
//  (V) 1.2 Add hoc withAPIService - data;
//  (V) 1.3 Add hoc withAUserData - data;
//  (V) 1.4 Profile fixing;
//  (V) 1.5 Cypress testing, Browser testing, Refactoring;
//  (V) 2. Search functions
//  (V) 2.1 Cypress testing, Browser testing, Refactoring;
//  (?) 2.  Add https://freegeoip.app/json/ to Settings and Profile;
//  (V) 3. CART functionalities
//  (V) 3.1 Cypress testing, Browser testing, Refactoring;
//  (V) 4. FAVORITES functionalities
//  (V) 4.1 Cypress testing, Browser testing, Refactoring;
//  (V) 5. SETTINGS functionalities
//  (V) 5.1 Cypress testing, Browser testing, Refactoring;
//  7. Close all style problems:
//      (V) 7.1 fix mobile version
//      (V) 7.2 check and fix slowly animation of menu opening + add border-radius: x x x x / x x x x;
//      (V) 7.3 Fix Animation problems with Profile field change and Menu opens lugs
//      (V) 7.4 Fix crossbrowser issues. (Phone Input in Profile)
//      7.5 Minify CSS result
//      7.6 Check page speed.
//  8. fix Safari problem with loading images on Shop
//  9. Add PWA
//      9.1 Cypress testing, Browser testing, Refactoring;
//  10. Try to remove all Typescript 'any' from project
//  11. Readme.md creating (describe you features: content all dynamic (category etc.), random data in cypress tests etc).
//      Necessarily indicate where i got design
//  12. Upwork page creating. Video demo creation. Cypress work demonstration via video.  Necessarily indicate where i got design

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app'),
);
