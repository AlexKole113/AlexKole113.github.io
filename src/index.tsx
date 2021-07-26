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
//  API
//  (V) 1.1 Create common API class with static functions
//  (V) 1.2 Add hoc withAPIService - data
//  1.3 add hoc withContext - Themes, menus
// TODO: add redux
//  2.1 Wrap needed components withAPIService and connect to redux;
//  2.2 add redux funcs actions, mapDispatch..,mapState..
// TODO: add sagas
// TODO: add cypress

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app'),
);
