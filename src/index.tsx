import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import App from './components/App';

import './styles/index.scss';

// TODO: hocs needed
// 1. WithContext - Themes, menus
// 2. WithAPIService - data

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);
