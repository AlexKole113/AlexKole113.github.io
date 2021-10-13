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
//  1. API
//  (V) 1.1 Create common API class with static functions;
//  (V) 1.2 Add hoc withAPIService - data;
//  (V) 1.3 Add hoc withAUserData - data;
//  (V) 1.4 Profile fixing;
//  (V) 1.5 Cypress testing, Browser testing, Refactoring;
//  2. Search functions
//  (V) 2.1 Cypress testing, Browser testing, Refactoring;
//  2.  Add https://freegeoip.app/json/ to Settings and Profile;
//  3. CART functionalities
//      3.1 Cypress testing, Browser testing, Refactoring;
//  4. FAVORITES functionalities
//      4.1 Cypress testing, Browser testing, Refactoring;
//  5. SETTINGS functionalities
//      5.1 Cypress testing, Browser testing, Refactoring;
//  7. Fix all tod's in styles file
//  8. Create pages: Demo page, 404, 505, Thank U
//  9. Add PWA
//      9.1 Cypress testing, Browser testing, Refactoring;
//  10. Try to remove all Typescript 'any' from project
//  11. Refactoring

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app'),
);
