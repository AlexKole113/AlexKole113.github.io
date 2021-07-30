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
//  (V) 1.1 Create common API class with static functions
//  (V) 1.2 Add hoc withAPIService - data
//  (V) 1.2 Add hoc withAUserData - data
//      1.3 profile fixing
//  2. SAGA + REDUX
//      2.1 Replace direct API handling to Saga handling
//  3. CART functionalities
//  4. FAVORITES functionalities
//  5. SETTINGS functionalities
//  6. Search functions
//  7. Fix all tod's in styles file
//  8. Create pages: Demo page, 404, 505, Thank U
//  9. Add PWA
//  10. Try to remove all Typescript 'any' from project
//  11. Refactoring
//  12. Cypress testing, browser testing

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app'),
);
