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
//  2. SAGA + REDUX
//      2.1 Replace direct API handling to Saga handling
//  3. CART + Favorites functionalities
//  4. Settings functionalities
//  5. Search functions
//  6. Create pages: Demo page, 404, 505, Thank U
//  7. Add PWA
//  8. Try to remove all Typescript 'any' from project
//  9. Refactoring
//  10. Cypress testing, browser testing

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app'),
);
